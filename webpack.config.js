var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: ['./app.js'],
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  }
};