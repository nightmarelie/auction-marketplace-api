'use strict'

const app = require('./server');
const http = require('http').Server(app);
const { server: { port } } = require('../config');
const db = require('../models/mongoose');

db.on('error', (err) => console.error(err));
http.listen(port, () => console.log(`Server is running on the port: ${port}`));