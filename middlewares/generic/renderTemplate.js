/**
 * Render a template with the given name
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    console.log(request.session.userid);
    response.render(templateName, response.payload);
  };
};
