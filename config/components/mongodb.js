'use strict'

const joi = require('joi');

const envSchema = {
    MONGODB_URI: joi.string().uri({ scheme: 'mongodb' }).required(),
};

const config = {
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
};

module.exports = {
    config,
    envSchema
};
