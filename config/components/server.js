'use strict'

const joi = require('joi');

const envSchema = {
    PORT: joi.number().required(),
};

const config = {
    server: {
        port: process.env.PORT,
    },
};

module.exports = {
    config,
    envSchema
};
