/**
 * Get the details of a note, or redirect to / if it does not exist
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {

    // dummy data
    response.payload.note = {
      id: 1,
      title: "Jegyzet",
      body: "LOrem ipsum",
      views: 112,
      dateString: "2 napja",
      user: {
        id: 1,
        name: "Gipsz Jakab",
      }
    };

    return next();
  };
};
