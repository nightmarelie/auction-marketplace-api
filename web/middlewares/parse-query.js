'use strict'

const qs = require('qs');

module.exports = options => {
    return (req, _, next) => {
        req.query = qs.parse(req.query, options);
        next();
    }
}
