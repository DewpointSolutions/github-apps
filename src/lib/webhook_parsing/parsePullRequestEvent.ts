import Bugsnag from "@bugsnag/js";
import { PullRequestEvent } from "@octokit/webhooks-types";

export interface ParsePullRequestEventResponse {
  pullRequest: {
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

export default function parsePullRequestEvent(
  event: PullRequestEvent
): ParsePullRequestEventResponse | null {
  if (!event.installation?.id) {
    Bugsnag.notify(new Error("missing installation ID"));
    return null;
  }

  if (
    (event.pull_request.labels || []).some(
      (label) => label.name === "SKIP_LOOM_UNFURL"
    )
  ) {
    console.log(
      "skipping Loom URL expansion because SKIP_LOOM_UNFURL is applied"
    );
    return null;
  }

  return {
    pullRequest: {
      number: event.number,
      body: event.pull_request.body || "",
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
