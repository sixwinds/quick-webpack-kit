const fs = require( 'fs' );

const PACKAGE_JSON_FILE_NAME = './package.json';

function addRunscriptCommand() {
  try {
    let packageJsonContent = fs.readFileSync( PACKAGE_JSON_FILE_NAME, 'utf8' );
    let packageJson = JSON.parse( packageJsonContent );
    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts[ 'build:dev' ] = 'webpack --env dev';
    packageJson.scripts[ 'build' ] = 'webpack --env prod';
    packageJson.scripts[ 'start' ] = 'webpack-dev-server --open';

    fs.writeFileSync( PACKAGE_JSON_FILE_NAME, JSON.stringify(packageJson, null, 2) );
  } catch(e) {
    console.log( 'package.json is not found, please init your project before run quick-webpack-kit.' );
    throw e;
  }
}

module.exports = addRunscriptCommand;