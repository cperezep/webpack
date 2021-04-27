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
        test: /\.(svg|png|jpe?g|gif)$/i,
        // asset/resource: emits a separate file and exports the URL
        // asset/inline: exports a data URI of the asset (base64)
        // asset: automatically chooses between exporting a data URI and emitting a separate file, pick between outputing images to a file, or inlining them in the bundle as base64 with a default max inline size of 8kb
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/, // x? -> optional
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    // Attempt to resolve these extensions in order. If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.
    // which is what enables users to leave off the extension when importing:
    // import File from '../path/component';
    extensions: [".js", ".jsx", "..."],
  },
};
