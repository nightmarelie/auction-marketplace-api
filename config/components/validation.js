const joi = require('joi');

module.exports = (...schema) => {
    const { error: err } = joi.validate(process.env, joi.object(Object.assign({}, ...schema)).unknown().required());

    if (err) throw new Error(`Config validation error: ${err.message}`);
}
