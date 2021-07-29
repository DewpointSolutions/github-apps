import { APIGatewayProxyHandler } from "aws-lambda";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginAwsLambda from "@bugsnag/plugin-aws-lambda";

let bugsnagHandler: (
  handler: APIGatewayProxyHandler
) => APIGatewayProxyHandler = (handler) => handler;

if (process.env.NODE_ENV !== "test") {
  Bugsnag.start({
    plugins: [BugsnagPluginAwsLambda],
    apiKey: "db16300ee8ae854fd07744831cf0fdb2",
    releaseStage: process.env.BUGSNAG_RELEASE_STAGE,
  });

  const bugsnagPlugin = Bugsnag.getPlugin("awsLambda");

  if (!bugsnagPlugin) {
    throw new Error("bugsnagPlugin can't be null");
  }

  bugsnagHandler = bugsnagPlugin.createHandler();

  if (!bugsnagHandler) {
    throw new Error("bugsnagHandler can't be null");
  }
}

export default bugsnagHandler;
