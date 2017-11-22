/**
 * Get the details of a user
 */
module.exports = function (objectRepository, templateName) {

  const User = require('../../models/users');

  return function (request, response, next) {

    User.findById(request.params.id, function (error, user) {
      response.payload.user = user;
      return next();
    });
  };
};
