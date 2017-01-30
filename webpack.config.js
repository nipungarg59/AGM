// var path = require("path")
// var webpack = require('webpack')
// var BundleTracker = require('webpack-bundle-tracker')

// module.exports = {
//   context: __dirname,

//   entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

//   output: {
//       path: path.resolve('./assets/bundles/'),
//       filename: "[name]-[hash].js",
//   },

//   plugins: [
//     new BundleTracker({filename: './webpack-stats.json'}),
//   ],

//   module: {
//     loaders: [
//       { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',query: { presets:['react'] }}, // to transform JSX into JS
//     ],
//   },

//   resolve: {
//     modulesDirectories: ['node_modules', 'bower_components'],
//     extensions: ['', '.js', '.jsx']
//   },
// }

var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.devtool = "#eval-source-map"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-local.json'}),
])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
)

config.module.loaders.push(
  { test: /\.css$/, loader: "style-loader" })

config.module.loaders.push(
  {
  test: /\.css$/,
  loader: 'css-loader',
  query: {
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
})

config.module.loaders.push(
{
  test: /\.(jpg|png)$/,
  loader: 'url'
})

module.exports = config