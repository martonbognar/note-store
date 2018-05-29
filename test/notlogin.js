var assert = require('assert');
var expect = require('chai').expect;

let checkNotLoggedIn = require('../middlewares/users/checkNotLoggedIn');

describe('notlogin', function () {
  it('should redirect to profile when logged in', function () {
    let request = {session: {userid: 1}};
    let response = {redirect: function (u) {return u;}};
    expect(checkNotLoggedIn()(request, response, function(error) {
      expect(error).to.equal(undefined);
    })).to.equal('/user/1');
  });
  it('should return next when not logged in', function (done) {
    let request = {session: {userid: undefined}}; // a session valami olyan magicet hasznal, hogy az userid lekerdezese nem dob errort
    let response = {};
    checkNotLoggedIn()(request, response, function(error) {
      expect(error).to.equal(undefined);
      done();
    });
  });
});
