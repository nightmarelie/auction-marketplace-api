'use strict'

const router = require('express').Router();

router.use('/users', require('./users'));
// router.use('/lots', require('./lots'));
// router.use('/bids', require('./bids'));
// router.use('/orders', require('./orders'))

router.get('/', (req, res) => {
    res.end('Hello index page');
});

module.exports = router;
