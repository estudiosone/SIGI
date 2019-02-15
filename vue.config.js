const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, './node_modules')]
      }
    }
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'SIGI',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF'
  }
}