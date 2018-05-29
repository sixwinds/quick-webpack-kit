const RuleJsonStringDictionary = require( '../v4/rules' );

function generateCommonConfigString( webpackVersion, jsProcessorNames, styleProcessorNames ) {
  // TODO: 根据 webpackVersion 来动态加载对应目录的rules，第一版先写死v4，以后改成动态加载。
  let ruleJsonStringArray = [];
  setRuleJsonStringByProcesserName( jsProcessorNames, ruleJsonStringArray );
  setRuleJsonStringByProcesserName( styleProcessorNames, ruleJsonStringArray );

  let rulesJsonString = ruleJsonStringArray.join( ',' );
  return (
`const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin( ['dist'], {
      root: path.resolve(__dirname, '../'),
      exclude: [],
      verbose: true,
      dry: false
    } ),
    new HtmlWebpackPlugin( {
      template: 'index.html'
    } )
  ],
  output: {
    filename: 'scripts/[name].[hash:8].js',
    path: path.resolve( __dirname, '../dist' )
  },
  module: {
    rules:[ ${rulesJsonString} ]
  }
}`
  );
}

function setRuleJsonStringByProcesserName( processorNames, array ) {
  if ( processorNames && array ) {
    processorNames.forEach( function(name){
      if ( RuleJsonStringDictionary[name] ) {
        array.push( RuleJsonStringDictionary[name].jsonString )
      }
    } )
  }
}

module.exports = generateCommonConfigString;