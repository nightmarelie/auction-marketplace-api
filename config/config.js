'use strict'

require('dotenv').config();
const joi = require('joi');

const { config: common, envSchema: commonEnvSchema } = require('./components/common');
const { config: server, envSchema: serverEnvSchema } = require('./components/server');

const envSchema = Object.assign({}, commonEnvSchema, serverEnvSchema);
const { error: err } = joi.validate(process.env, joi.object(envSchema).unknown().required());

if (err) throw new Error(`Config validation error: ${err.message}`);

module.exports = Object.assign({}, common, server);
