/**
 * Get the list of all the notes, or if a userid is set in the request,
 * get the notes of that user
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {

    // dummy data
    response.payload.notes = [{
      id: 1,
      title: "Jegyzet",
      body: "LOrem ipsum",
      views: 112,
      dateString: "2 napja",
      user: {
        id: 1,
        name: "Gipsz Jakab",
      }
    }];

    return next();
  };
};
