'use strict';

const request = require('supertest')
  , app = require('express')();

app.use(require('../lib/router'));

describe('Header parser', () => {

  it('Should parse request headers and tells who am I', done => {
    const headers = {
      'x-forwarded-for': '123.4.5.6',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
      'accept-language': 'fr,en-GB;q=0.8,en;q=0.6,en-US;q=0.4'
    };
    request(app)
      .get('/')
      .set(headers)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.be.deepEqual({
          ipaddress: '123.4.5.6',
          language: 'fr',
          software: '(X11; Linux x86_64)'
        });
        done();
      });

  });

});
