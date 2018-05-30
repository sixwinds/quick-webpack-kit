const path = require('path');
const fs = require( 'fs' );
const copydir = require( 'copy-dir' );
const generateCommonConfigString = require( './generateCommonConfigString' );

const WEBPACK_CONFIGS_DIR_NAME = 'webpack_configs';

function generateWebpackFiles( webpackVersion, jsProcessorNames, styleProcessorNames ) {
  // combine common webpack config by options
  let commonConfigJsonString = generateCommonConfigString( webpackVersion, jsProcessorNames, styleProcessorNames );
  // create all related files
  createWebpackCommonConfigFile( commonConfigJsonString );
  copyTheOtherWebpackFiles( webpackVersion, jsProcessorNames, styleProcessorNames );
}

function createWebpackCommonConfigFile( content ) {
  mkdirSync( WEBPACK_CONFIGS_DIR_NAME );
  fs.writeFileSync( `./${WEBPACK_CONFIGS_DIR_NAME}/webpack.common.js`, content );
}

function mkdirSync( directory ) {
  try {
    fs.statSync( directory );
  } catch(e) {
    fs.mkdirSync( directory );
  }
}

function copyTheOtherWebpackFiles( webpackVersion, jsProcessorNames, styleProcessorNames ) {
  let filesDir = path.resolve( __dirname, `../v${webpackVersion}/templates` );
  try {
    copydir.sync( filesDir, './' );
    if ( shouldCopyPostcssConfigFile(webpackVersion, styleProcessorNames) ) {
      copyPostcssConfigFile( webpackVersion );
    }
  } catch(e) {
    console.log( 'Error occours when create script files.' );
    throw e;
  }
}

function shouldCopyPostcssConfigFile( webpackVersion, styleProcessorNames ) {
  return webpackVersion=='4' && styleProcessorNames.includes('sasslike');
}

function copyPostcssConfigFile( webpackVersion ) {
  let filesName = path.resolve( __dirname, `../v${webpackVersion}/rules/postcss.config.js` );
  try {
    fs.copyFileSync( filesName, './postcss.config.js' );
  } catch(e) {
    console.log( 'Error occours when create postcss.config.js files.' );
    throw e;
  }
}

module.exports = generateWebpackFiles;