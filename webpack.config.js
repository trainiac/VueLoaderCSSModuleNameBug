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
  output: {
    path: rootDir,
    filename: 'build.js',
    publicPath
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
    publicPath
  }
}

