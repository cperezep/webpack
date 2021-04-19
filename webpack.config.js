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
};
