import Bugsnag from "@bugsnag/js";
import { IssuesEvent } from "@octokit/webhooks-types";

export interface ParseIssuesEventResponse {
  issue: {
    number: number;
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

export default function parseIssuesEvent(
  event: IssuesEvent
): ParseIssuesEventResponse | null {
  if (!event.installation?.id) {
    Bugsnag.notify(new Error("missing installation ID"));
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
      body: event.issue.body || "",
    },
    repository: {
      owner: {
        login: event.repository.owner.login,
      },
      name: event.repository.name,
    },
    installation: {
      id: event.installation.id,
    },
  };
}
