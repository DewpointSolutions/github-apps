import { IssuesEvent, PullRequestEvent } from "@octokit/webhooks-types";
import { Response, errorResponse } from "../utils/lambda-response";
import parseIssuesEvent, {
  ParseIssuesEventResponse,
} from "../lib/webhook_parsing/parseIssuesEvent";
import parsePullRequestEvent, {
  ParsePullRequestEventResponse,
} from "../lib/webhook_parsing/parsePullRequestEvent";
import { runWarm, successResponse } from "../utils";

import AWS from "aws-sdk";
import Bugsnag from "@bugsnag/js";
import bugsnagHandler from "../utils/bugsnagHandler";
import { createAppAuth } from "@octokit/auth-app";
import { incrementStat } from "../dal/incrementStat";
import parseIssueCommentEvent from "../lib/webhook_parsing/parseIssueCommentEvent";
import parsePullRequestReviewBodyEvent from "../lib/webhook_parsing/parsePullRequestReviewBodyEvent";
import parsePullRequestReviewCommentEvent from "../lib/webhook_parsing/parsePullRequestReviewCommentEvent";
import { request } from "@octokit/request";
import unfurlLoomURLsIntoGIFs from "./unfurlLoomURLsIntoGIFs";

export const loomURLExpander = async (
  event: AWSLambda.APIGatewayEvent,
  {
    parsePullRequestEvent,
    parseIssuesEvent,
    incrementStat,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parsePullRequestEvent: (
      payload: PullRequestEvent
    ) => ParsePullRequestEventResponse | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseIssuesEvent: (payload: IssuesEvent) => ParseIssuesEventResponse | null;
    incrementStat: (name: string, add: number) => Promise<unknown>;
  }
): Promise<Response> => {
  if (!process.env.GITHUB_PRIVATE_KEY) {
    Bugsnag.notify(new Error("Missing GITHUB_PRIVATE_KEY"));
  }

  if (!("body" in event) || !event.body) {
    return errorResponse({
      message: "missing event.body",
    });
  }

  const requestBody = JSON.parse(event.body);

  console.log("body: ", requestBody);

  if (!process.env.GITHUB_APP_ID) {
    Bugsnag.notify(new Error("missing GITHUB_APP_ID"));
  }
  if (!process.env.GITHUB_PRIVATE_KEY) {
    Bugsnag.notify(new Error("missing GITHUB_PRIVATE_KEY"));
  }

  const requestWithAuth = ({ installationId }: { installationId: number }) => {
    const auth = createAppAuth({
      appId: process.env.GITHUB_APP_ID || "",
      privateKey: process.env.GITHUB_PRIVATE_KEY || "",
      installationId,
    });

    return request.defaults({
      request: {
        hook: auth.hook,
      },
      mediaType: {
        previews: ["machine-man"],
      },
    });
  };

  if ("comment" in requestBody && "issue" in requestBody) {
    const data = parseIssueCommentEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parseIssueCommentEvent returning null (possibly expected case)",
      });
    }

    console.log("issue comment output: ", data);

    if (!data) {
      return errorResponse({
        message: "issue coment parsing failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.comment.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "no changes to be made to issue comment",
      });
    }

    const inputs = {
      owner: data.repository.owner.login,
      repo: data.repository.name,
      comment_id: data.comment.id,
      body: unfurling.stringWithUnfurledLoomURLs,
    };
    try {
      await requestWithAuth({ installationId: data.installation.id })(
        "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
        inputs
      );
    } catch (err) {
      console.error(`issue comment update errored with inputs: `, inputs, err);
      return errorResponse({
        message: err.message,
      });
    }

    try {
      await incrementStat("loom-urls-expanded", unfurling.numLoomURLsUnfurled);
    } catch (err) {
      console.error("failed to increment count: ", err);
    }

    return successResponse({
      message: "issue or pull comment updated",
    });
  } else if ("issue" in requestBody && !("comment" in requestBody)) {
    const data = parseIssuesEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parseIssuesEvent returning null (possibly expected case)",
      });
    }

    console.log("issue body parsing output: ", data);

    if (!data) {
      return errorResponse({
        message: "issue body parsing failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.issue.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "no changes to be made to issue body",
      });
    }

    const inputs = {
      owner: data.repository.owner.login,
      repo: data.repository.name,
      issue_number: data.issue.number,
      body: unfurling.stringWithUnfurledLoomURLs,
    };
    try {
      await requestWithAuth({ installationId: data.installation.id })(
        "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
        inputs
      );
    } catch (err) {
      console.error(`updating issue body errored with inputs: `, inputs, err);
      return errorResponse({
        message: err.message,
      });
    }

    try {
      await incrementStat("loom-urls-expanded", unfurling.numLoomURLsUnfurled);
    } catch (err) {
      console.error("failed to increment count: ", err);
    }

    return successResponse({
      message: "issue body updated",
    });
  } else if ("pull_request" in requestBody && "comment" in requestBody) {
    const data = parsePullRequestReviewCommentEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parsePullRequestReviewCommentEvent returning null (possibly expected case)",
      });
    }

    console.log("pull request comment parse output: ", data);

    if (!data) {
      return errorResponse({
        message: "pull request review comment parse failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.comment.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "no changes to be made to the pull request review comment",
      });
    }

    const inputs = {
      owner: data.repository.owner.login,
      repo: data.repository.name,
      comment_id: data.comment.id,
      body: unfurling.stringWithUnfurledLoomURLs,
    };
    try {
      await requestWithAuth({ installationId: data.installation.id })(
        "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
        inputs
      );
    } catch (err) {
      console.error(
        `updating pull request review comments errored with inputs: `,
        inputs,
        err
      );
      return errorResponse({
        message: err.message,
      });
    }

    try {
      await incrementStat("loom-urls-expanded", unfurling.numLoomURLsUnfurled);
    } catch (err) {
      console.error("failed to increment count: ", err);
    }

    return successResponse({
      message: "pull request comment body updated",
    });
  } else if ("pull_request" in requestBody && "review" in requestBody) {
    const data = parsePullRequestReviewBodyEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parsePullRequestEvent returning null (possibly expected case)",
      });
    }

    console.log("pull request review body parse output: ", data);

    if (!data) {
      return errorResponse({
        message: "pull request review body parse failed",
      });
    }

    if (!data.review.body) {
      return successResponse({
        message: "returning early due to missing pull request review body",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.review.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "no changes to be made to the pull request review body",
      });
    }

    const inputs = {
      owner: data.repository.owner.login,
      repo: data.repository.name,
      pull_number: data.pullRequest.number,
      review_id: data.review.id,
      body: unfurling.stringWithUnfurledLoomURLs,
    };
    try {
      await requestWithAuth({ installationId: data.installation.id })(
        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        inputs
      );
    } catch (err) {
      console.error(
        `updating pull request review body errored with inputs: `,
        inputs,
        err
      );
      return errorResponse({
        message: err.message,
      });
    }

    try {
      await incrementStat("loom-urls-expanded", unfurling.numLoomURLsUnfurled);
    } catch (err) {
      console.error("failed to increment count: ", err);
    }

    return successResponse({
      message: "pull request review body updated",
    });
  } else if ("pull_request" in requestBody && !("comment" in requestBody)) {
    const data = parsePullRequestEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parsePullRequestEvent returning null (possibly expected case)",
      });
    }

    console.log("pull request body parse output: ", data);

    if (!data) {
      return errorResponse({
        message: "pull request body parse failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.pullRequest.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "no changes to be made to the pull request body",
      });
    }

    const inputs = {
      owner: data.repository.owner.login,
      repo: data.repository.name,
      pull_number: data.pullRequest.number,
      body: unfurling.stringWithUnfurledLoomURLs,
    };
    try {
      await requestWithAuth({ installationId: data.installation.id })(
        "PATCH /repos/{owner}/{repo}/pulls/{pull_number}",
        inputs
      );
    } catch (err) {
      console.error(
        `updating pull request body errored with inputs: `,
        inputs,
        err
      );
      return errorResponse({
        message: err.message,
      });
    }

    try {
      await incrementStat("loom-urls-expanded", unfurling.numLoomURLsUnfurled);
    } catch (err) {
      console.error("failed to increment count: ", err);
    }

    return successResponse({
      message: "PR body updated",
    });
  }

  console.error("unexpected event: ", requestBody);

  return errorResponse({
    message: "unexpected event",
  });
};

// runWarm function handles pings from the scheduler so you don't
// have to put that boilerplate in your function.
export default bugsnagHandler(
  runWarm((event: AWSLambda.APIGatewayEvent) =>
    loomURLExpander(event, {
      parsePullRequestEvent,
      parseIssuesEvent,
      incrementStat: (name: string, add: number) =>
        incrementStat({ ddb: new AWS.DynamoDB({}), name, add }),
    })
  )
);
