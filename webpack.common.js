const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: This option controls if and how source maps are generated.
  // default: 'eval'
  // false -> allows you to see source code
  // 'source-map' -> free transpile code
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
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
