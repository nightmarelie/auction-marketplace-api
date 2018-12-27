'use strict'

const joi = require('joi');

const envSchema = {
    NODE_ENV: joi.string().allow(['development', 'production']).required(),
};

const config = {
    env: process.env.NODE_ENV,
};

module.exports = {
    config,
    envSchema
};
