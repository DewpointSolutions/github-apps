import Bugsnag from "@bugsnag/js";
import { PullRequestReviewCommentEvent } from "@octokit/webhooks-types";

export interface ParsePullRequestReviewCommentEventResponse {
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

export default function parsePullRequestReviewCommentEvent(
  event: PullRequestReviewCommentEvent
): ParsePullRequestReviewCommentEventResponse | null {
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
    comment: {
      id: event.comment.id,
      body: event.comment.body || "",
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
