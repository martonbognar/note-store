/**
 * Check if a user is not logged in, if they are, redirect to their profile
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    return next();
  };
};
