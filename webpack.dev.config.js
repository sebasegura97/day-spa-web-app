const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/entries/index.js'),
  },
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      // hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options:  {
              presets: ['babel-preset-env', 'react', 'stage-2'],
              // plugins: ['syntax-dynamic-import']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif|svg|woff|otf)$/,
          use: {
            loader: 'url-loader',
            options:  {
              limit: 100000000,
              name: 'images/[name].[hash].[ext]'
            }
          }
        },
        // {
        //   test: /\.(jpg|png|gif|svg)$/,
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       publicPath: 'dist/',
        //       name: 'images/[name].[hash].[ext]',
        //     }
        //   }
        // },
      ]
    },
    plugins: [
      // new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin()
    ]
  }
