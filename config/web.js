'use strict'

const { config: common, envSchema: commonEnvSchema } = require('./components/common');
const { config: server, envSchema: serverEnvSchema } = require('./components/server');
const { config: mongodb, envSchema: mongodbEnvSchema } = require('./components/mongodb');

require('./components/validation')(commonEnvSchema, serverEnvSchema, mongodbEnvSchema);

module.exports = Object.assign({}, common, server, mongodb);
