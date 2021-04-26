module.exports = {
  presets: [
    "@babel/preset-env",
    // runtime: 'automatic' -> Apply new jsx transform
    // read more: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
