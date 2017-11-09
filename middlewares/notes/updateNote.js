/**
 * Create a new note with the given details, or if a noteid is set,
 * update the details of that note if the userid mathes
 */
module.exports = function (objectRepository, templateName) {

  const Note = require('../../models/notes');
  const User = require('../../models/users');

  return function (request, response, next) {
    if (response.payload.note === undefined) {
      console.log("creating, id:");
      console.log(request.session.userid);
      let note = new Note();
      note.title = request.body.title;
      note.body = request.body.body;

      User.findById(request.session.userid, function (error, user) {
        note._user = user;
        console.log(user);
      });

      note.save(function (error, result) {
        if (error) {
          return next(error);
        }

        return response.redirect('/note/' + result.id);
      });
    } else {
      console.log("Updating a note");
      return next();
    }
  };
};
