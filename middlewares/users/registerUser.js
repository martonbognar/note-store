/**
 * Check the uniqueness of a new user, if they are valid, set the session
 * variables, save the details and redirect, else return an error
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    return next();
  };
};
