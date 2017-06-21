// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {
      '/api': {
        //  target: 'http://127.0.0.1:8778'
        target: 'http://120.26.86.173:8778'
        // target: 'http://192.168.1.188:8778'
        // target: 'http://192.168.1.117:8778'
        //target: 'http://192.168.1.132:8778'
        //target: 'http://192.168.1.106:8778'
      },
      '/support': {
        //target: 'http://127.0.0.1:8778'
        target: 'http://120.26.86.173:8778'
      },
      '/business': {
        //target: 'http://127.0.0.1:8778'
        target: 'http://120.26.86.173:8778'
      }
    }
  }
}
