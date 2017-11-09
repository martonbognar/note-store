/**
 * Check if a user is logged in, if not, redirect to /login
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    if (typeof request.session.userid !== undefined) {
      return next();
    } else {
      return response.redirect('/login');
    }
  };
};
