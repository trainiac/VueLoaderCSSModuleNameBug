const webpack = require('webpack')
const path = require('path')
const rootDir = __dirname
const publicPath = '/'
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
    path: rootDir,
    filename: 'build.js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          buble: {
            objectAssign: 'Object.assign'
          },
          cssModules: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback:  {
      rewrites: [
          { from: /./, to: `/index.html` }
      ]
    },
    port,
    publicPath,
    contentBase: rootDir
  }
}

