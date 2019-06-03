const webpack = require("webpack");
const path = require('path');
const entryToOutput = require('./entryToOutput');
const DEBUG = process.env.NODE_ENV == 'production' ? false : true;

const watchOptions = {
  ignored: /node_modules/,
  aggregateTimeout: 300,
  poll: 500
};

function createModule() {
  let loaders = DEBUG
    ? [{
      loader: "cache-loader",
    }]
    : [];
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
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader:[ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ]
  };
}

// const externals = {
//   'I18n': 'I18n',
//   'react/addons': true,
//   'react/lib/ExecutionEnvironment': true,
//   'react/lib/ReactContext': true
// };

const resolve = {
  extensions: ['.js', '.jsx', 'json'],
  modules: [
    path.resolve('./node_modules'),
    path.resolve('./javascripts')
  ]
};
let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  })
];

module.exports = [{
  cache: DEBUG,
  mode: process.env.NODE_ENV,
  devtool: DEBUG ? 'source-map' : false,
  entry: entryToOutput.entry,
  output: {
    path: entryToOutput.clientsideOutputPath,
    filename: '[name].js'
  },
  watchOptions: watchOptions,
  module: createModule(),
  resolve: resolve,
  plugins: plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]|reducers|sagas/,
          chunks: "initial",
          enforce: true
        }
      }
    }
  }
},
{
  cache: DEBUG,
  devtool: DEBUG ? 'source-map' : false,
  mode: process.env.NODE_ENV,
  entry: entryToOutput.entry,
  target: 'node',
  output: {
    path: entryToOutput.serversideOutputPath,
    libraryTarget: 'commonjs',
    filename: '[name].js'
  },
  watchOptions: watchOptions,
  module: createModule(),
  resolve: resolve,
  plugins: plugins,
  // externals: externals
}];
