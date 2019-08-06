const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',//'development', //'production'
  entry: [
    "babel-polyfill",
    './js/src'],
  output: {
    path: path.resolve(__dirname, "js/dist"),
    publicPath: 'packages/concrete5_graphql_websocket_security_sample/js/dist/',
    filename: 'concrete5_graphql_websocket_security_sample.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js[x]$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Utils: path.resolve(__dirname, 'js/src/utils/'),
      Log$: path.resolve(__dirname, 'js/src/utils/Log'),
    }
  },
  plugins: [
    new BrowserSyncPlugin(
        {
            host: 'localhost',
            port: 4000,
            proxy: 'https://test.localhost/',
            ui: {
                port: 4001
            },
            https: {
                key: "/etc/ssl/localhost+4-key.pem",
                cert: "/etc/ssl/certs/localhost+4.pem",
            },
        }),
  ],
};