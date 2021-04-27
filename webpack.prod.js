const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    // Output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, "dist"),
    // This places all images processed in an assets folder
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  plugins: [
    // This plugin extracts CSS into separate files.
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    // This plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i, // i -> case insensitive match
        use: [
          // 4. Extract css into files
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimize: true, // Tell webpack to minimize the bundle using the TerserPlugin or the plugin(s) specified in optimization.minimizer.
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      new CssMinimizerPlugin(), // This plugin uses cssnano to optimize and minify your CSS.
    ],
  },
});
