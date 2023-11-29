const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

import { merge } from "webpack";

module.exports = merge(common, {
  mode: "production",
});
