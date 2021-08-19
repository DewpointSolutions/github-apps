import { PullRequestReviewEvent } from "@octokit/webhooks-types";
import bugsnagNotify from "../../utils/BugsnagNotify";

export interface ParsePullRequestReviewEventResponse {
  review: {
    id: number;
    body: string | null;
  };
  pullRequest: {
    number: number;
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

export default function parsePullRequestReviewBodyEvent(
  event: PullRequestReviewEvent
): ParsePullRequestReviewEventResponse | null {
  if (!event.installation?.id) {
    bugsnagNotify(new Error("missing installation ID"));
    return null;
  }

  // action === "created" or "dismissed" is an expected case
  if (event.action !== "submitted" && event.action !== "edited") {
    return null;
  }

  const labels = event.pull_request.labels;
  if (!labels) {
    bugsnagNotify(new Error("couldn't find labels, but we'll continue anyway"));
  }

  if ((labels || []).some((label) => label.name === "SKIP_LOOM_UNFURL")) {
    console.log(
      "skipping Loom URL expansion because SKIP_LOOM_UNFURL is applied"
    );
    return null;
  }

  return {
    review: {
      id: event.review.id,
      body: event.review.body,
    },
    pullRequest: {
      number: event.pull_request.number,
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
