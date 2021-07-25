import { Response, errorResponse } from "../utils/lambda-response";
import parsePullRequestEvent, {
  ParsePullRequestEventResponse,
} from "../lib/webhook_parsing/parsePullRequestEvent";
import { runWarm, successResponse } from "../utils";

import Bugsnag from "@bugsnag/js";
import { PullRequestOpenedEvent } from "@octokit/webhooks-types";
import bugsnagHandler from "../utils/bugsnagHandler";
import { createAppAuth } from "@octokit/auth-app";
import { request } from "@octokit/request";
import unfurlLoomURLsIntoGIFs from "./unfurlLoomURLsIntoGIFs";

export const loomURLExpander = async (
  event: AWSLambda.APIGatewayEvent,
  {
    parsePROpenedAction,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parsePROpenedAction: (
      payload: PullRequestOpenedEvent
    ) => ParsePullRequestEventResponse | null;
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

  const webhookRequestBody = parsePROpenedAction(requestBody);

  console.log("parsePROpenedAction output: ", webhookRequestBody);

  if (!webhookRequestBody) {
    return errorResponse({
      message: "parsePROpenedAction failed",
    });
  }

  const auth = createAppAuth({
    appId: process.env.GITHUB_APP_ID || "125807",
    privateKey: process.env.GITHUB_PRIVATE_KEY || "",
    installationId: webhookRequestBody.installation.id,
  });
  const requestWithAuth = request.defaults({
    request: {
      hook: auth.hook,
    },
    mediaType: {
      previews: ["machine-man"],
    },
  });

  const { data: app } = await requestWithAuth("GET /app");

  console.log("app: ", app);

  const unfurling = unfurlLoomURLsIntoGIFs(webhookRequestBody.pullRequest.body);

  if (!unfurling.didMakeLoomPreviewChange) {
    return successResponse({
      message: "No changes to be made",
    });
  }

  const inputs = {
    owner: webhookRequestBody.repository.owner.login,
    repo: webhookRequestBody.repository.name,
    pull_number: webhookRequestBody.pullRequest.number,
    body: unfurling.stringWithUnfurledLoomURLs,
  };
  try {
    await requestWithAuth(
      "PATCH /repos/{owner}/{repo}/pulls/{pull_number}",
      inputs
    );
  } catch (err) {
    console.log(err);
    console.error(`errored with inputs: `, inputs);
    return errorResponse({
      message: err.message,
    });
  }

  return successResponse({
    message: "PR body updated",
  });
};

// runWarm function handles pings from the scheduler so you don't
// have to put that boilerplate in your function.
export default bugsnagHandler(
  runWarm((event: AWSLambda.APIGatewayEvent) =>
    loomURLExpander(event, { parsePROpenedAction: parsePullRequestEvent })
  )
);
