var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
};