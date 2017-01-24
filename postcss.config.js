
module.exports = () => {
  const pluginConfigs = {
    'import': {
      path: [__dirname]
    }
  }

  const plugins = [{
    name: 'import',
    mod: require('postcss-import')
  }, {
    name: 'mixins',
    mod: require('postcss-mixins')
  }, {
    name: 'simple-vars',
    mod: require('postcss-simple-vars')
  }, {
    name: 'color-function',
    mod: require('postcss-color-function')
  }, {
    name: 'autoprefixer',
    mod: require('autoprefixer')
  }]

  return {
    syntax: 'postcss-scss',
    plugins: plugins.map(plugin => {
      if (plugin.name in pluginConfigs) {
        return plugin.mod(pluginConfigs[plugin.name])
      }

      return plugin.mod()
    })
  }
}
