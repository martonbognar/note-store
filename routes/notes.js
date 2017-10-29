let renderTemplate = require('../middlewares/generic/renderTemplate');

let deleteNoteById = require('../middlewares/notes/deleteNoteById');
let getNoteById = require('../middlewares/notes/getNoteById');
let getNoteList = require('../middlewares/notes/getNoteList');
let updateNote = require('../middlewares/notes/updateNote');

let checkLoggedIn = require('../middlewares/users/checkLoggedIn');
let checkNotLoggedIn = require('../middlewares/users/checkNotLoggedIn');
let getUserById = require('../middlewares/users/getUserById');

module.exports = function (app) {

  let objectRepository = {};

  app.get('/user/:id',
    getUserById(objectRepository),
    getNoteList(objectRepository),
    renderTemplate(objectRepository, 'user'),
  );

  app.get('/note/:id',
    getNoteById(objectRepository),
    renderTemplate(objectRepository, 'note'),
  );
  app.post('/note/:id',
    checkLoggedIn(objectRepository),
    getNoteById(objectRepository),
    updateNote(objectRepository),
    renderTemplate(objectRepository, 'note'),
  );

  app.get('/note/delete/:id',
    checkLoggedIn(objectRepository),
    getNoteById(objectRepository),
    deleteNoteById(objectRepository),
    renderTemplate(objectRepository, 'index'),
  );

  app.get('/write',
    checkLoggedIn(objectRepository),
    renderTemplate(objectRepository, 'write'),
  );
  app.post('/write',
    checkLoggedIn(objectRepository),
    updateNote(objectRepository),
    renderTemplate(objectRepository, 'write'),
  );

};
