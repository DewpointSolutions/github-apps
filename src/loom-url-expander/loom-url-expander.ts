import { IssuesEvent, PullRequestEvent } from "@octokit/webhooks-types";
import { Response, errorResponse } from "../utils/lambda-response";
import parseIssuesEvent, {
  ParseIssuesEventResponse,
} from "../lib/webhook_parsing/parseIssuesEvent";
import parsePullRequestEvent, {
  ParsePullRequestEventResponse,
} from "../lib/webhook_parsing/parsePullRequestEvent";
import { runWarm, successResponse } from "../utils";

import Bugsnag from "@bugsnag/js";
import bugsnagHandler from "../utils/bugsnagHandler";
import { createAppAuth } from "@octokit/auth-app";
import parseIssueCommentEvent from "../lib/webhook_parsing/parseIssueCommentEvent";
import { request } from "@octokit/request";
import unfurlLoomURLsIntoGIFs from "./unfurlLoomURLsIntoGIFs";

export const loomURLExpander = async (
  event: AWSLambda.APIGatewayEvent,
  {
    parsePullRequestEvent,
    parseIssuesEvent,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parsePullRequestEvent: (
      payload: PullRequestEvent
    ) => ParsePullRequestEventResponse | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseIssuesEvent: (payload: IssuesEvent) => ParseIssuesEventResponse | null;
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

  if ("comment" in requestBody) {
    const data = parseIssueCommentEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parseIssueCommentEvent returning null (possibly expected case)",
      });
    }

    console.log("parseIssueCommentEvent output: ", data);

    if (!data) {
      return errorResponse({
        message: "parseIssueCommentEvent failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.comment.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "No changes to be made",
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
      console.error(`errored with inputs: `, inputs, err);
      return errorResponse({
        message: err.message,
      });
    }

    return successResponse({
      message: "issue or pull comment updated",
    });
  } else if ("issue" in requestBody) {
    const data = parseIssuesEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parseIssuesEvent returning null (possibly expected case)",
      });
    }

    console.log("parseIssuesEvent output: ", data);

    if (!data) {
      return errorResponse({
        message: "parseIssuesEvent failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.issue.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "No changes to be made",
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
      console.error(`errored with inputs: `, inputs, err);
      return errorResponse({
        message: err.message,
      });
    }

    return successResponse({
      message: "issue body updated",
    });
  } else if ("pull_request" in requestBody) {
    const data = parsePullRequestEvent(requestBody);
    if (!data) {
      return successResponse({
        message:
          "returning early due to parsePullRequestEvent returning null (possibly expected case)",
      });
    }

    console.log("parsePullRequestEvent output: ", data);

    if (!data) {
      return errorResponse({
        message: "parsePullRequestEvent failed",
      });
    }

    const unfurling = unfurlLoomURLsIntoGIFs(data.pullRequest.body);

    if (!unfurling.didMakeLoomPreviewChange) {
      return successResponse({
        message: "No changes to be made",
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
      console.error(`errored with inputs: `, inputs, err);
      return errorResponse({
        message: err.message,
      });
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
    loomURLExpander(event, { parsePullRequestEvent, parseIssuesEvent })
  )
);
