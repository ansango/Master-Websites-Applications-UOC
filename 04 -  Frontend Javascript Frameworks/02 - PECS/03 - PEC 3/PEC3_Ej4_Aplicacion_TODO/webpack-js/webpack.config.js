const path = require('path');

module.exports = {
  entry: './app.js',
  devtool: 'inline-source-map',
  watch: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', 
        exclude: /(node_modules|bower_modules)/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};
