const requireOption = require('../common').requireOption;

/**
 * Check the uniqueness of a new user, if they are valid, set the session
 * variables, save the details and redirect, else return an error
 */
module.exports = function (objectRepository, templateName) {

  const User = require('../../models/users');

  return function (request, response, next) {
    let user = new User();
    user.name = request.body.name;
    user.email = request.body.email;
    user.password = request.body.password;

    user.save(function (error, result) {
      if (error) {
        return next(error);
      }

      request.session.userid = result.id;
      return response.redirect('/user/' + result.id);
    });
  };
};
