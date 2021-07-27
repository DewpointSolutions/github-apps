import { Response, errorResponse } from "../utils/lambda-response";

import Bugsnag from "@bugsnag/js";
import { MarketplacePurchaseEvent } from "@octokit/webhooks-types";
import bugsnagHandler from "../utils/bugsnagHandler";
import fetch from "node-fetch";
import { successResponse } from "../utils";

export const loomURLExpanderGHMarketplaceCallback = async (
  event: AWSLambda.APIGatewayEvent
): Promise<Response> => {
  if (!("body" in event) || !event.body) {
    return errorResponse({
      message: "missing event.body",
    });
  }

  console.log(event.body);

  const requestBody = JSON.parse(event.body) as MarketplacePurchaseEvent;

  const slackInput = {
    unfurl_links: false,
    unfurl_media: false,
    text: `${requestBody.action} - ${requestBody.marketplace_purchase?.plan.name} - ${event.body}`,
    username: "marketplace",
    icon_emoji: ":smile:",
  };

  await fetch(process.env.GH_MARKETPLACE_CALLBACK_SLACK_URL || "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(slackInput),
  })
    .then(() => {
      console.log("slack success");
    })
    .catch((error: Error) => {
      console.error("error while posting to slack: ", error);
      Bugsnag.notify(error);
    });

  return successResponse({
    message: "PR body updated",
  });
};

// runWarm function handles pings from the scheduler so you don't
// have to put that boilerplate in your function.
export default bugsnagHandler((event: AWSLambda.APIGatewayEvent) =>
  loomURLExpanderGHMarketplaceCallback(event)
);
