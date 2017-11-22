/**
 * Get the details of a note, or redirect to / if it does not exist
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');
  const Markdown = require('markdown').markdown;

  return function (request, response, next) {
    Note.findById(request.params.id).populate('user').exec(function(error, note) {
      if (error) {
        return next(error);
      }

      note.updateViewCount();
      note.parsedHTML = Markdown.toHTML(note.body);
      note.dateString = note.getPrettyDate();
      note.base64 = Buffer.from(note.body).toString('base64');
      response.payload.note = note;
      return next();
    });
  };
};
