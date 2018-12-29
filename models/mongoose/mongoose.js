'use strict'

const { mongodb: { uri } } = require('../../config');
const mongoose = require('mongoose');

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose.connection;
