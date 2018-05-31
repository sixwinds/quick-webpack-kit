const allEnvConfigs = require( './webpack_configs/index.js' );

const DEFAULT_ENV = 'dev';

module.exports = function( cliEnv ) {
  let cliEnvConfig = allEnvConfigs[ cliEnv ];

  return cliEnvConfig || allEnvConfigs[ DEFAULT_ENV ];
}
