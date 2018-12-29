const assert = require('chai').assert;
require('../../../models/mongoose').on('error', (err) => console.error(err));
const model = require('./model');
const factory = require('factory-girl').factory;
const faker = require('faker');

suite('User model', function() {
    setup(() => {
        faker.seed(1);
        factory.define('user', model, {
            email: faker.internet.email(),
            phone: faker.phone.phoneNumberFormat(),
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            birthDay: faker.date.past(22, new Date(1997, 0, 0)),
            password: faker.random.number()
        })
    });

    teardown((done) => {
        model.deleteMany({}, (err) => { 
            if (err) return done(err);
            done();         
        });     
    });

    suite('Lifecycle', function () {
        test('should save user', function (done) {
            factory.build('user')
                .then(user => {
                    user.save()
                        .then(result => {
                            assert.property(result, 'email');
                            assert.property(result, 'phone');
                            assert.property(result, 'firstname');
                            assert.property(result, 'lastname');
                            assert.property(result, 'birthDay');
                            assert.property(result, 'password');
                            faker.seed(1);
                            assert.equal(result['email'], faker.internet.email());
                            assert.equal(result['phone'], faker.phone.phoneNumberFormat());
                            assert.equal(result['firstname'], faker.name.firstName());
                            assert.equal(result['lastname'], faker.name.lastName());
                            assert.equalDate(result['birthDay'], faker.date.past(22, new Date(1997, 0, 0)))
                            assert.equal(result['password'], faker.random.number());
                            done();
                        })
                        .catch(err => done(err));
              })
              .catch(err => done(err));
        });
    });
});
