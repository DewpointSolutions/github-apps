import Bugsnag from "@bugsnag/js";
import { IssueCommentEvent } from "@octokit/webhooks-types";

export interface ParseIssueCommentEventResponse {
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

  const labels = event.issue.labels ?? [];
  if (!labels) {
    Bugsnag.notify(
      new Error("couldn't find labels, but we'll continue anyway")
    );
  }

  if ((labels || []).some((label) => label.name === "SKIP_LOOM_UNFURL")) {
    console.log(
      "skipping Loom URL expansion because SKIP_LOOM_UNFURL is applied"
    );
    return null;
  }

  return {
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
