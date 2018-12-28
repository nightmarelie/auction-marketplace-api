'use strict'

const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Hello from user root router!');
});

module.exports = router;
