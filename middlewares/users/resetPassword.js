/**
 * Check the credentials for a password reset, if they are valid,
 * set the session variables, update details and redirect, else return an error
 */
module.exports = function (objectRepository, templateName) {

  const User = require('../../models/users');

  return function (request, response, next) {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;

    User.findOne({email: email, name: name}, function (error, user) {
      if (error) {
        return next(error);
      }

      if (user !== null) {
        request.session.userid = user.id;
        user.password = password;
        user.save();
        return response.redirect('/user/' + user.id);
      } else {
        return next();
      }
    });
  };
};
