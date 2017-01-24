const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.join(__dirname)
const buildPath = path.join(rootDir, 'build')
const publicPath = '/static/'
const indexFilename = 'index.html'
const port = 3456

module.exports = {
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      path.join(rootDir, 'main.js')
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: buildPath,
    filename: '[name].build.[hash].js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader?objectAssign=Object.assign',
        exclude: /node_modules/,
        include: rootDir
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          html: 'pug-loader',
          buble: {
            objectAssign: 'Object.assign'
          },
          cssModules: {
            sourceMap: true,
            modules: true,
            importLoaders: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: indexFilename,
      template: 'index.pug'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.css',
      '.pug'
    ],
    modules: [
      rootDir,
      'node_modules'
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback:  {
      rewrites: [
          { from: /./, to: `/static/${indexFilename}` }
      ]
    },
    port,
    publicPath,
    contentBase: buildPath
  }
}

