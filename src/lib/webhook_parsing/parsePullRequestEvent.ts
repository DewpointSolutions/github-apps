import {
  PullRequestEditedEvent,
  PullRequestOpenedEvent,
} from "@octokit/webhooks-types";

import Bugsnag from "@bugsnag/js";

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
  event: PullRequestOpenedEvent | PullRequestEditedEvent
): ParsePullRequestEventResponse | null {
  if (!event.installation?.id) {
    Bugsnag.notify(new Error("missing installation ID"));
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
      id: event.installation?.id || -999999,
    },
  };
}
