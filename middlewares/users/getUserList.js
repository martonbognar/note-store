/**
 * Get the details of all users
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {

    // dummy data
    response.payload.users = [{
      id: 1,
      name: "Gipsz Jakab",
    }];

    return next();
  };
};
