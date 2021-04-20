const path = require("path");

module.exports = {
  mode: "development",
  // devtool: This option controls if and how source maps are generated. default value: 'eval'
  // devtool: false, -> allows you to see source code
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
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
};
