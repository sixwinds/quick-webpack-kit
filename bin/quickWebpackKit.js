#!/usr/bin/env node
const program = require('commander');
const packageJson = require('../package');
const generateWebpackFiles = require( '../lib/generateWebpackFiles' );
const addRunscriptCommand = require( '../lib/addRunscriptCommand' );
const installDevDependencies = require( '../lib/installDevDependencies' );

let defaultJsProcessors = [ 'react' ];
let defaultStyleProcessors = [ 'sasslike' ];
let defaultWebpackVersion = '4';

function parseListArgv( val ) {
  if ( val ) {
    return val.split( ',' );
  } else {
    return [];
  }
}

program
  .version( packageJson.version, '-v, --version' )
  .option( '-u, --use-version <version-number>', 'Webpack version' )
  .option( '-j, --js-processors <processors>', 'Specify javascript processors', parseListArgv )
  .option( '-s, --style-processors <processors>', 'Specify style(css,image,fonts) processors', parseListArgv )
  .option( '--no-install', 'Do not install devDependncies package' )
  .parse( process.argv );


let jsProcessors = program.jsProcessors || defaultJsProcessors;
let styleProcessors = program.styleProcessors || defaultStyleProcessors;
let webpackVersion = program.useVersion || defaultWebpackVersion;

if ( webpackVersion=='4' ) {
  // generate all files
  generateWebpackFiles( webpackVersion, jsProcessors, styleProcessors );
  // add script command to package.json
  addRunscriptCommand();
  if ( program.install ) {
    // install devDependencies
    installDevDependencies( webpackVersion, jsProcessors, styleProcessors );
  }
} else {
  console.log( 'Only support webpack version 4 in current version.' );
}


