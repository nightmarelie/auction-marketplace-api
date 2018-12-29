'use strict'

const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);
const joi = require('joi');
const uniqueValidator = require('mongoose-unique-validator');

const joiSchema = joi.object({
    // email is required
    // email is unique
    // email must be a valid email string
    email: joi.string().email().required().meta({ index: true, unique: true }),
    // phone is required
    // phone is unique
    // and must be a string of the format XXX-XXX-XXXX
    // where X is a digit (0-9)
    phone: joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required().meta({ index: true, unique: true }),
    firstname: joi.string().alphanum().min(3).max(30).required(),
    lastname: joi.string().alphanum().min(3).max(30).required(),
    // birthDay is required
    // and must be a date. 
    // Age must be > 21
    birthDay: joi.date().min(new Date((new Date()).getFullYear()-21, 0, 0)).required(),
    // password is required
    // and must contain alphanumeric characters and numbers
    // at least 3 characters long but no more than 30
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});

const schema = new mongoose.Schema(joigoose.convert(joiSchema));
schema.plugin(uniqueValidator);

module.exports = mongoose.model('user', schema);
