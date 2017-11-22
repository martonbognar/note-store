/**
 * Get the list of all the notes, or if a userid is set in the request,
 * get the notes of that user
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');

  return function (request, response, next) {
    if (response.payload.user !== undefined) {
      // get notes of one user
      Note.find({user: response.payload.user}, function(error, noteList) {
        if (error) {
          return next(error);
        }

        response.payload.notes = noteList;
        return next();
      });
    } else {
      // get all notes
      Note.find({}).populate('user').exec(function(error, noteList) {
        if (error) {
          return next(error);
        }

        response.payload.notes = noteList;
        return next();
      });
    }
  };
};
