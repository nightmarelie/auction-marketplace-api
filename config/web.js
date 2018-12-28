'use strict'

const { config: common, envSchema: commonEnvSchema } = require('./components/common');
const { config: server, envSchema: serverEnvSchema } = require('./components/server');

require('./components/validation')(commonEnvSchema, serverEnvSchema);

module.exports = Object.assign({}, common, server);
