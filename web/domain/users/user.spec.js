const expect = require('chai').expect;
require('../../../models/mongoose').on('error', (err) => console.error(err));
const model = require('./model');

describe('User model', function() {
    after((done) => {
        model.deleteMany({}, (err) => { 
            if (err) return done(err);
            done();         
        });     
    });

    describe('Lifecycle', function () {
        it ('should save user', function (done) {
            const user = new model({
                email: "test@test.com",
                phone: "222-222-2222",
                firstname: "Test",
                lastname: "Test",
                birthDay: new Date(1996, 21, 4),
                password: "test"
            });
            user.save()
                .then(result => {
                    console.log(result);
                    expect(result).to.have.property('email');
                    expect(result).to.have.property('phone');
                    expect(result).to.have.property('firstname');
                    expect(result).to.have.property('lastname');
                    expect(result).to.have.property('birthDay');
                    expect(result).to.have.property('password');
                    done();
                })
                .catch(err => done(err));
        });
    });
});
