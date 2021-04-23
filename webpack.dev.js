const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // i -> case insensitive match
        test: /\.scss$/i,
        use: [
          // Order matters
          // 3. Creates `style` nodes from JS strings and inject into DOM
          "style-loader",
          // 2. Translates CSS into CommonJS
          "css-loader",
          // 1. Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
