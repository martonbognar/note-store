/**
 * Check the credentials for a user, if they are valid, set the session
 * variables and redirect to their profile, else return an error
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    return next();
  };
};
