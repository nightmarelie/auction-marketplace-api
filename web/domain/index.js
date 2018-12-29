'use strict'

const router = require('express').Router();

router.use('/users', require('./users'));
// router.use('/lots', require('./lots'));
// router.use('/bids', require('./bids'));
// router.use('/orders', require('./orders'))

router.get('/', (req, res) => {
    res.render('layout', { title: 'Main page', message: 'Hello index page' });
});

module.exports = router;
