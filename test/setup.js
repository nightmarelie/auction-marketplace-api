'use strict'

const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiDate = require('chai-datetime');

process.env.PORT = 3000;
process.env.MONGODB_URI='mongodb://localhost:27017/test-auction-marketplace'

before(() => {
    chai.use(sinonChai);
    chai.use(chaiDate);

    beforeEach(function beforeEach() {
        this.sandbox = sinon.createSandbox();
    });

    afterEach(function afterEach() {
        this.sandbox.restore();
    });
});
