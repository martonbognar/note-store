/**
 * Render a template with the given name
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    response.render(templateName, response.payload);
  };
};
