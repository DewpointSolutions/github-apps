import Bugsnag from "@bugsnag/js";
import { IssueCommentEvent } from "@octokit/webhooks-types";

export interface ParseIssueCommentEventResponse {
  issue: {
    number: number;
  };
  comment: {
    id: number;
    body: string;
  };
  repository: {
    owner: {
      login: string;
    };
    name: string;
  };
  installation: {
    id: number;
  };
}

export default function parseIssueCommentEvent(
  event: IssueCommentEvent
): ParseIssueCommentEventResponse | null {
  if (!event.installation?.id) {
    Bugsnag.notify(new Error("missing installation ID"));
    return null;
  }

  // action === "deleted" is an expected case
  if (event.action !== "created" && event.action !== "edited") {
    return null;
  }

  if (
    (event.issue.labels || []).some(
      (label) => label.name === "SKIP_LOOM_UNFURL"
    )
  ) {
    console.log(
      "skipping Loom URL expansion because SKIP_LOOM_UNFURL is applied"
    );
    return null;
  }

  return {
    issue: {
      number: event.issue.number,
    },
    comment: {
      id: event.comment.id,
      body: event.comment.body,
    },
    repository: {
      owner: {
        login: event.repository.owner.login,
      },
      name: event.repository.name,
    },
    installation: {
      id: event.installation?.id || -999999,
    },
  };
}
