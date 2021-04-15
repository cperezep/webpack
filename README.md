# Webpack

## Concepts

### Entry
An entry point indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
By default its value is ./src/index.js, but you can specify a different (or multiple entry points).

### Output
The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

### Loaders
Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
At a high level, loaders have two properties in your webpack configuration:
  * The test property identifies which file or files should be transformed.
  * The use property indicates which loader should be used to do the transforming.
```javascript
module.exports = {
  output: {
    filename: 'first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```

### Plugins
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the new operator.
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  // html-webpack-plugin generates an HTML file for your application by injecting automatically all your generated bundles.
tip
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

### Mode
By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

## Run