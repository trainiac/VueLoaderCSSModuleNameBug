const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')

const compiler = webpack(config)

const server = new WebpackDevServer(
  compiler, config.devServer
)

server.listen(config.devServer.port)