/**
 * Delete a note if the logged in userid matches the note id
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    return next();
  };
};
