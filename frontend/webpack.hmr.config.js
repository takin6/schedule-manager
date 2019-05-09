const webpack = require("webpack");
const path = require('path');
const entryToOutput = require('./entryToOutput');
const DEBUG = false;

const watchOptions = {
  ignored: /node_modules/,
  aggregateTimeout: 300,
  poll: 500
};

function createModule() {
  return {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnError: true
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
        use: {
          loader: 'url-loader',
        }
      },
    ]
  };
}

const externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

const resolve = {
  extensions: ['.js', '.jsx', 'json'],
  modules: [
    path.resolve('./node_modules'),
    path.resolve('./src')
  ]
};

module.exports = {
  cache: DEBUG,
  devtool: DEBUG ? 'source-map' : false,
  entry: entryToOutput.hmrEntry,
  output: {
    path: path.resolve("./components"),
    // railsとwebpack-dev-serverが違うので
    // https://github.com/webpack/webpack-dev-server/issues/262
    publicPath: "http://127.0.0.1:3232/components",
    filename: '[name].js'
  },
  watchOptions: watchOptions,
  module: createModule(),
  resolve: resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 3232,

    publicPath: '/components',

    historyApiFallback: true,
    // respond to 404s with index.html
    host: '127.0.0.1',

    hot: true,
    // enable HMR on the server
    contentBase: path.resolve(__dirname, 'dist'),

    // railsとwebpack-dev-serverのurlとportが違うので
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  externals: externals
};