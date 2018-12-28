'use strict'

const { config: common, envSchema: commonEnvSchema } = require('./components/common');

require('./components/validation')(commonEnvSchema);

module.exports = Object.assign({}, common);