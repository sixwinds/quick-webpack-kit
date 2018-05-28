const spawn = require('cross-spawn');
const RuleJsonStringDictionary = require( '../v4/rules' );

let webpackPackage = [
  'webpack',
  'webpack-cli',
  'webpack-merge',
  'clean-webpack-plugin',
  'html-webpack-plugin',
  'extract-text-webpack-plugin',
  'webpack-dev-server',
  'uglifyjs-webpack-plugin',

]

function installDevDependencies( webpackVersion, jsProcessorNames, styleProcessorNames ) {
  return new Promise( function(resolve, reject){
    let command = 'npm';
    let allDevDependencies = getInstallPackage( webpackVersion, jsProcessorNames, styleProcessorNames );
    let args = [
      'install',
      '--save-dev',
      '--save-exact',
      '--loglevel',
      '--verbose'
    ].concat( allDevDependencies );

    console.log('Installing packages. This might take a couple of minutes.');
    const child = spawn( command, args, {stdio: 'inherit'} );
    child.on( 'close', function(code){
      if (code !== 0) {
        reject( {
          command: `${command} ${args.join(' ')}`,
        } );
        return;
      }
      resolve();
    });
  } );
}

function getInstallPackage( webpackVersion, jsProcessorNames, styleProcessorNames ) {
  // TODO: 根据 webpackVersion 来动态加载对应目录的rules，第一版先写死v4，以后改成动态加载。
  let packageToInstall;
  packageToInstall = setDevDependenciesByProcesserName( jsProcessorNames );
  packageToInstall = packageToInstall.concat( setDevDependenciesByProcesserName(styleProcessorNames) );
  
  return webpackPackage.concat( packageToInstall );
}

function setDevDependenciesByProcesserName( processorNames ) {
  let result = [];
  if ( processorNames ) {
    processorNames.forEach( function(name){
      if ( RuleJsonStringDictionary[name] ) {
        result = result.concat( RuleJsonStringDictionary[name].devDependencies )
      }
    } )
  }
  return result;
}



module.exports = installDevDependencies;