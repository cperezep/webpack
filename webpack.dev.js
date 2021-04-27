const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  // Required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        // i -> case insensitive match
        test: /\.s(c|a)ss$/i,
        use: [
          // Order matters
          // 4. Creates `style` nodes from JS strings and inject into DOM
          "style-loader",
          // 3. Translates CSS into CommonJS
          "css-loader",
          // 2. Loader to process CSS with PostCSS
          "postcss-loader",
          // 1. Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  // Instructs webpack to target a specific environment.
  // Defaults to 'browserslist' or to 'web' when no browserslist configuration was found.
  // 'web' is required to enable live reloading
  target: "web",
  // Enable fast-refresh
  // https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/88#issuecomment-627558799
  optimization: {
    runtimeChunk: "single",
  },
});
