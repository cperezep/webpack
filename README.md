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

#### CSS-Loaders

- css-loader: The css-loader interprets @import and url() like import/require() and will resolve them returning CSS code.
- style-loader: Inject CSS into the DOM with <style> tag.
- sass-loader: Loads a Sass/SCSS file and compiles it to CSS.

#### HTML-Loader
- html-loader: Exports HTML as string. HTML is minimized when the compiler demands.
- Asset Modules: Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders.
```javascript
...
output: {
  filename: "main.[contenthash].js",
  path: path.resolve(__dirname, "dist"),
  // Custom output filename for assets
  assetModuleFilename: "assets/[hash][ext][query]",
},
module: {
  rules: [
    {
      test: /\.png/,
      type: 'asset/resource'
    }
  ]
},
...
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

#### HtmlWebpackPlugin
This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.

#### CleanWebpackPlugin
This plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

### Mode
By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

### Cache
So we're using webpack to bundle our modular application which yields a deployable /dist directory. Once the contents of /dist have been deployed to a server, clients (typically browsers) will hit that server to grab the site and its assets. The last step can be time consuming, which is why browsers use a technique called caching. This allows sites to load faster with less unnecessary network traffic. However, it can also cause headaches when you need new code to be picked up.

#### Output Filename
Webpack provides a method of templating the filenames using bracketed strings called substitutions. The [contenthash] substitution will add a unique hash based on the content of an asset. When the asset's content changes, [contenthash] will change as well.
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

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
- [Guide webpack 5](https://www.valentinog.com/blog/webpack/)

### webpack-merge
webpack-merge provides a merge function that concatenates arrays and merges objects creating a new object. If functions are encountered, it will execute them, run the results through the algorithm, and then wrap the returned values within a function again.
```javascript
const { merge } = require('webpack-merge');

// Default API
const output = merge(object1, object2, object3, ...);

// Keys matching to the right take precedence:
const output = merge(
  { fruit: "apple", color: "red" },
  { fruit: "strawberries" }
);
console.log(output); // { color: "red", fruit: "strawberries"}
```

### [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
The webpack-dev-server provides you with a simple web server and the ability to use live reloading.

### Separate App and Vendor Entries
We are telling webpack that we would like 2 separate entry points, our code and 3rd party libraries. With this you can import required libraries or files that aren't modified (e.g. Bootstrap, jQuery, images, etc) inside vendor.js and they will be bundled together into their own chunk. Content hash remains the same, which allows the browser to cache them separately thereby reducing load time.
```javascript
entry: {
  main: './src/index.js',
  vendor: './src/vendor.js',
},
```

