/**
 * Get the details of a note, or redirect to / if it does not exist
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');

  return function (request, response, next) {
    Note.findById(request.params.id).populate('user').exec(function(error, note) {
      if (error) {
        return next(error);
      }

      note.updateViewCount();
      response.payload.note = note;
      return next();
    });
  };
};
