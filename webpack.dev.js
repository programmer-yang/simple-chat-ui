const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 9000,
    // open: true,
    // hot: true,
    host: "0.0.0.0",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
});
