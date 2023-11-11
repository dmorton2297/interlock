const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development", // Only configured for development currently
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
});
