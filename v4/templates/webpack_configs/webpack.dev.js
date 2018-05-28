// utils
const merge = require( 'webpack-merge' );
// configs
const common = require( './webpack.common.js' );

/* --------------------------- main ---------------------------- */
module.exports = merge( common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9200
  }
} );