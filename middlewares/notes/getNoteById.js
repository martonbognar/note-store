/**
 * Get the details of a note, or redirect to / if it does not exist
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');

  return function (request, response, next) {

    Note.findById(request.params.id, function (error, note) {
      response.payload.note = note;
      console.log(note);
    });

    return next();
  };
};
