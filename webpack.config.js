var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CSPWebpackPlugin = require("csp-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", title: "Welcome" }),
    new CSPWebpackPlugin({
      "object-src": "'none'",
      "base-uri": "'self'",
      "script-src": [
        "'unsafe-inline'",
        "'self'",
        "'unsafe-eval'",
        "http://ajax.googleapis.com",
      ],
      "worker-src": ["'self'", "blob:"],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
