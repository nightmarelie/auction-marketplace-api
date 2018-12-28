'use strict'

const app = require('./server');
const http = require('http').Server(app);
const { server: { port } } = require('../config');

http.listen(port, () => console.log(`Server is running on the port: ${port}`));