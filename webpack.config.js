const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const rootPath = path.join(__dirname, '/src')

const config = {
  devtool: 'eval',
  context: rootPath,
  resolve: {
    extensions: ['', '.es6', '.js'],
    root: [rootPath]
  },
  resolveLoader: {
    root: [path.resolve(__dirname, 'node_modules')]
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(gif|jpg|jpeg|png)/, loader: 'url-loader' },
      { test: /\.es6$/, loader: 'babel-loader', query: {plugins: ['transform-runtime']} }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = config
