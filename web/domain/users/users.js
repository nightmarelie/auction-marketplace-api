'use strict'

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('users/user', { title: 'User page', message: 'Hello user page' });
});

module.exports = router;
