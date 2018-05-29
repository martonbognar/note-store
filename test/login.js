var assert = require('assert');
var expect = require('chai').expect;

let checkLoggedIn = require('../middlewares/users/checkLoggedIn');

describe('login', function () {
  it('should return next when logged in', function (done) {
    let request = {session: {userid: 1}}; // a session valami olyan magicet hasznal, hogy az userid lekerdezese nem dob errort
    let response = {};
    checkLoggedIn()(request, response, function(error) {
      expect(error).to.equal(undefined);
      done();
    });
  });
  it('should redirect to login when not logged in', function () {
    let request = {session: {userid: undefined}};
    let response = {redirect: function (u) {return u;}};
    expect(checkLoggedIn()(request, response, function(error) {
      expect(error).to.equal(undefined);
    })).to.equal('/login');
  });
});
