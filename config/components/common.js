'use strict'

const joi = require('joi');

const envSchema = {
    NODE_ENV: joi.string().allow(['development', 'production', 'test']).required(),
    PROCESS_TYPE: joi.string().allow(['web', 'lots-postprocessor']).required(),
};

const config = {
    env: process.env.NODE_ENV,
    processType: process.env.PROCESS_TYPE
};

module.exports = {
    config,
    envSchema
};
