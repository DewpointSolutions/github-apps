/* eslint-disable @typescript-eslint/no-var-requires */

const nodeExternals = require("webpack-node-externals");
const slsw = require("serverless-webpack");
const { BugsnagSourceMapUploaderPlugin } = require("webpack-bugsnag-plugins");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new BugsnagSourceMapUploaderPlugin({
      apiKey: "db16300ee8ae854fd07744831cf0fdb2",
      overwrite: true,
      publicPath: ".webpack",
      appVersion: require("./package.json").version,
    }),
  ],
};
