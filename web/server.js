'use strict'

const app = require('express')();
const middlewares = require('./middlewares');
const routers = require('./routers');

app.use(middlewares.parseQuery({ allowDots: true }));
app.use(routers);

module.exports = app;
