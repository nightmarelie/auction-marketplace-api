'use strict'

const processType = process.env.PROCESS_TYPE;
let config;

try {
    config = require(`./${processType}`);
} catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') throw new Error(`No config for process type: ${processType}`);

    throw err;
} 

module.exports = config;
