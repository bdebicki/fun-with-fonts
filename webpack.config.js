const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = {
  entry: {
    full: './src/js/full-package/index.js',
    one: './src/js/one-package/index.js',
    two: './src/js/two-packages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*','.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      chunks: ['full'],
      filename:'full-package.html',
      template: 'src/templates/full-package.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['one'],
      filename:'one-package.html',
      template: 'src/templates/one-package.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['two'],
      filename:'two-packages.html',
      template: 'src/templates/two-packages.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/icons/*.woff', to: 'icons/[name].woff' },
      { from: 'src/icons/*.woff2', to: 'icons/[name].woff2' }
    ]),
    new WriteFilePlugin({
      test: /\.(woff|woff2)$/,
    })
  ]
};

module.exports = config;