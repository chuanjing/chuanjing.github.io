var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var appName = utils.getAppName();
module.exports = {
  entry: {
    //app: './src/'+appName+'.js'
    vendor: ['env.js']
  },
  externals: {
    'jquery': 'jQuery',
    'NIM': 'NIM',
    'OSS': 'OSS',
    'wangEditor': 'wangEditor',
    'Promise': 'Promise'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    root: path.join(__dirname, '../src'),
    alias: {
      'styles': path.resolve(__dirname, '../src/themes/default'),
      'nifty': path.resolve(__dirname, '../src/components/nifty'),
      '3rd': path.resolve(__dirname, '../src/3rd'),
      'vbc': path.resolve(__dirname, '../src/3rd/vuestrap-base-components/src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
      //{
      //  test: /\.js$/,
      //  loader: 'eslint',
      //  include: projectRoot,
      //  exclude: /node_modules/
      //}
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

module.exports.entry['app-' + appName] = './src/' + appName + '.js';
