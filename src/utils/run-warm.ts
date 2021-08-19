const runWarm =
  (lambdaFunc: AWSLambda.Handler): AWSLambda.Handler =>
  (event, context, callback) => {
    // Detect the keep-alive ping from CloudWatch and exit early. This keeps our
    // lambda function running hot.
    if (event.source === "serverless-plugin-warmup") {
      console.log("this invocation is just a warm-up ping");
      return callback(null, "pinged");
    }

    return lambdaFunc(event, context, callback);
  };

export default runWarm;
