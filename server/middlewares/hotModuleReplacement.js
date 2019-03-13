/**
 * Hot Module Replacement with Server Side Rendering
 * - webpack-dev-middleware
 * - webpack-hot-middleware
 */
import webpack from 'webpack';

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Import statement
const config = require('../../config/webpack/webpack.config.dev.babel').default;

const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/',
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
});

const hotMiddleware = webpackHotMiddleware(compiler);

module.exports = {
  devMiddleware,
  hotMiddleware
};
