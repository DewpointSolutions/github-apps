import { Response, errorResponse } from "../utils/lambda-response";
import { runWarm, successResponse } from "../utils";

import Bugsnag from "@bugsnag/js";
import { PullRequestOpenedEvent } from "@octokit/webhooks-types";
import bugsnagHandler from "../utils/bugsnagHandler";
import { createAppAuth } from "@octokit/auth-app";
import parsePullRequestEvent from "../lib/webhook_parsing/parsePullRequestEvent";
import { request } from "@octokit/request";

export const mergie = async (
  event: AWSLambda.APIGatewayEvent,
  {
    parsePROpenedAction,
  }: {
    parsePROpenedAction: (payload: PullRequestOpenedEvent) => void;
  }
): Promise<Response> => {
  Bugsnag.notify(new Error("Test error"));

  if (!process.env.GITHUB_PRIVATE_KEY) {
    Bugsnag.notify(new Error("Missing GITHUB_PRIVATE_KEY"));
  }

  const auth = createAppAuth({
    appId: process.env.GITHUB_APP_ID || "125467",
    privateKey: process.env.GITHUB_PRIVATE_KEY || "",
    installationId: 18139037,
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

  if (!("body" in event) || !event.body) {
    return errorResponse({
      message: "missing event.body",
      input: event,
    });
  }

  const body = JSON.parse(event.body);

  console.log("body: ", body);

  const data = parsePROpenedAction(body);

  console.log("parsePROpenedAction output: ", data);

  // successResponse handles wrapping the response in an API Gateway friendly
  // format (see other responses, including CORS, in `./utils/lambda-response.ts)
  const response = successResponse({
    message: "Go Serverless! Your function executed successfully!",
    input: event,
  });

  return response;
};

// runWarm function handles pings from the scheduler so you don't
// have to put that boilerplate in your function.
export default bugsnagHandler(
  runWarm((event: AWSLambda.APIGatewayEvent) =>
    mergie(event, { parsePROpenedAction: parsePullRequestEvent })
  )
);
