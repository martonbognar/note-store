/**
 * Create a new note with the given details, or if a noteid is set,
 * update the details of that note if the userid mathes
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');
  const User = require('../../models/users');

  return function (request, response, next) {
    if (response.payload.note === undefined) {
      let note = new Note();
      note.title = request.body.title;
      note.body = request.body.body;

      User.findById(request.session.userid, function (error, user) {
        note.user = user;

        note.save(function (error, result) {
          if (error) {
            return next(error);
          }

          return response.redirect('/note/' + result.id);
        });
      });
    } else {
      console.log('updating note');
      let title = request.body.title;
      let body = request.body.body;

      response.payload.note.title = title;
      response.payload.note.body = body;

      response.payload.note.save(function (error, result) {
        if (error) {
          return next(error);
        }

        return next();
      });
    }
  };
};
