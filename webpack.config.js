const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')




module.exports = (env) => {

  const plugins = [
    new ExtractTextPlugin("css/[name].css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      // new CleanWebpackPlugin([que carpetas quiero borrar],{configuarciones})
      new CleanWebpackPlugin(['dist'],{root: __dirname})

    )
  }


  return{

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
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist') + "/",
      chunkFilename: 'js/[id].[chunkhash].js',

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
            use: ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    minimize: true,
                  }
                }
              ]
            })
          },
          {

            test: /\.(png|jpg|gif|svg|woff|otf)$/,
            use: {
              loader: 'url-loader',
              options:  {
                limit: 100000000,
                name: './images/[name].[hash].[ext]'
              }
            }
          },

        ]
      },

      plugins
  }


  }
