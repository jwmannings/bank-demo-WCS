'use strict';

var app = require('../app');
var bodyParser = require('body-parser');
var request = require('supertest');

app.use(bodyParser.json());

describe('Basic API tests', function() {
  it('GET to / should load the home page', function(done) {
    request(app).get('/').expect(200, done);
  });
});
