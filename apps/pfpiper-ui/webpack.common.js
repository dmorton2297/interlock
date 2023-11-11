const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './index.tsx', // Application entry mode
  /**
   * Upon build, output this project to dist
   */
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      /**
       * This rule resolves typescript files using ts-loader
       * https://www.npmjs.com/package/ts-loader
       */
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
      /**
       * This rule resolves css using mini-css extract plugin
       * and css-loader
       * https://webpack.js.org/plugins/mini-css-extract-plugin/
       * https://www.npmjs.com/package/css-loader
       */
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),

  ],
};
