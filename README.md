<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# Webpack

**[Webpack](https://github.com/webpack/webpack)** is a **module bundler**.
Webpack takes modules with dependencies and generates static assets representing those modules.

The 2 main things Webpack does:
- It bundles our code/assets together
- It manages dependencies

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

## Babel
Babel is a JavaScript compiler. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js).
- Source code transformations (codemods)

### Presets
The Babel foundation has created presets that contains common bundles of plugins. That means you only have to do the NPM installation and babel configuration once and then a bunch of plugins are automatically installed for you. A preset is a set of plugins used to support particular language features.

There are many different Babel presets, both official presets from Babel foundation and unofficial presets from other organizations such as [Airbnb](https://github.com/airbnb/babel-preset-airbnb).

#### Official Presets
We've assembled a few presets for common environments:

- [@babel/preset-env](preset-env.md) for compiling ES2015+ syntax
- [@babel/preset-typescript](preset-typescript.md) for [TypeScript](https://www.typescriptlang.org)
- [@babel/preset-react](preset-react.md) for [React](https://reactjs.org/)
- [@babel/preset-flow](preset-flow.md) for [Flow](https://flow.org/)

## Notes

### Add-Ons
- [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack)
