'use strict'

const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

process.env.PORT = 3000;
process.env.MONGODB_URI='mongodb://localhost:27017/test-auction-marketplace'

before(() => {
    chai.use(sinonChai);

    beforeEach(function beforeEach() {
        this.sandbox = sinon.sandbox.create();
    });

    afterEach(function afterEach() {
        this.sandbox.restore();
    });
});
