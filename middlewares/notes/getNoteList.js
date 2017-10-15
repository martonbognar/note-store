/**
 * Get the list of all the notes, or if a userid is set in the request,
 * get the notes of that user
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    return next();
  };
};
