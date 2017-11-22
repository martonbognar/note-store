/**
 * Delete a note if the logged in userid matches the note id
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');

  return function (request, response, next) {
    Note.findById(request.params.id, function (error, note) {
      note.remove(function (error) {
        if (error) {
          return next(error);
        }

        return response.redirect('/');
      });
    });
  };
};
