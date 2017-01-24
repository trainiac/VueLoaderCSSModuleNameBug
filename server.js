const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const opn = require('opn')
const isProd = process.env.NODE_ENV === 'production'
const config = require('./webpack.config.js')

const compiler = webpack(config)

const server = new WebpackDevServer(
  compiler, config.devServer
)

server.listen(config.devServer.port)
opn(`http://localhost:${config.devServer.port}`)