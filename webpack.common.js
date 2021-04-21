const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: This option controls if and how source maps are generated. default value: 'eval', false -> allows you to see source code
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
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
      // Added html-loader to automatically require the files we reference in img tags
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
