import Bugsnag from "@bugsnag/js";
import { PullRequestReviewEvent } from "@octokit/webhooks-types";

export interface ParsePullRequestReviewEventResponse {
  review: {
    id: number;
    body: string | null;
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

export default function parseIssueOrPullRequestCommentEvent(
  event: PullRequestReviewEvent
): ParsePullRequestReviewEventResponse | null {
  if (event.review) {
    Bugsnag.notify(
      new Error(
        "bull request review bodies not yet supported... this is just a stub"
      )
    );
  }

  if (!event.installation?.id) {
    Bugsnag.notify(new Error("missing installation ID"));
    return null;
  }

  // action === "created" or "dismissed" is an expected case
  if (event.action !== "submitted" && event.action !== "edited") {
    return null;
  }

  const labels = event.pull_request.labels;
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
    review: {
      id: event.review.id,
      body: event.review.body,
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
