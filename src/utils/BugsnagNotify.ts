import Bugsnag from "@bugsnag/js";

// eslint-disable-next-line @typescript-eslint/no-empty-function
let bugsnagNotify: typeof Bugsnag.notify = () => {};

if (process.env.NODE_ENV !== "test") {
  bugsnagNotify = Bugsnag.notify;
}

export default bugsnagNotify;
