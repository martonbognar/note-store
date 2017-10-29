/**
 * Get the details of a user
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {

    // dummy data
    response.payload.user = {
      id: 1,
      name: "Gipsz Jakab",
    };

    return next();
  };
};
