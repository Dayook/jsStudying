var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['','.js', '.jsx']
  },
  module: {
    rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
  },
  devtool: 'source-map'
};

