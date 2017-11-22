/**
 * Check the credentials for a user, if they are valid, set the session
 * variables and redirect to their profile, else return an error
 */
module.exports = function (objectRepository, templateName) {

  const User = require('../../models/users');

  return function (request, response, next) {
    let email = request.body.email;
    let password = request.body.password;

    User.findOne({email: email, password: password}, function (error, user) {
      if (error) {
        return next(error);
      }

      if (user !== null) {
        request.session.userid = user.id;
        return response.redirect('/user/' + user.id);
      } else {
        return next();
      }
    });
  };
};
