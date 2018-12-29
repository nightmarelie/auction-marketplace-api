'use strict'

const express = require('express');
const app = express();
const middlewares = require('./middlewares');
const routers = require('./domain');
const path = require ('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'domain'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares.parseQuery({ allowDots: true }));
app.use(routers);

module.exports = app;
