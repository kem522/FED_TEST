const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const path = require('path');


const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js', // webpack entry point. Module to start building dependency graph
  output: {
    path: path.resolve('public'),
    filename: 'app.js',
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: [ /node_modules/ ]},
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ])
  ],
  devServer: {  // configuration for webpack-dev-server
    contentBase: './src',  //source of static assets
    port: 8000,  // port to run dev-server
    open: true
  }
};
