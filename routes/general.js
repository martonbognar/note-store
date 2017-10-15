let renderTemplate = require('../middlewares/generic/renderTemplate');

let checkLoggedIn = require('../middlewares/users/checkLoggedIn');
let checkNotLoggedIn = require('../middlewares/users/checkNotLoggedIn');
let getUserById = require('../middlewares/users/getUserById');
let getUserList = require('../middlewares/users/getUserList');
let loginUser = require('../middlewares/users/loginUser');
let logoutUser = require('../middlewares/users/logoutUser');
let registerUser = require('../middlewares/users/registerUser');
let resetPassword = require('../middlewares/users/resetPassword');

module.exports = function (app) {

  let objectRepository = {};

  app.get('/',
    renderTemplate(objectRepository, 'index'),
  );

  app.get('/login',
    checkNotLoggedIn(objectRepository),
    renderTemplate(objectRepository, 'login'),
  );
  app.post('/login',
    checkNotLoggedIn(objectRepository),
    loginUser(objectRepository),
    renderTemplate(objectRepository, 'login'),
  );

  app.get('/logout',
    checkLoggedIn(objectRepository),
    logoutUser(objectRepository),
  );

  app.get('/register',
    checkNotLoggedIn(objectRepository),
    renderTemplate(objectRepository, 'register'),
  );
  app.post('/register',
    checkNotLoggedIn(objectRepository),
    registerUser(objectRepository),
    renderTemplate(objectRepository, 'register'),
  );

  app.get('/passwordreset',
    checkNotLoggedIn(objectRepository),
    renderTemplate(objectRepository, 'reset_password'),
  );
  app.post('/passwordreset',
    checkNotLoggedIn(objectRepository),
    resetPassword(objectRepository),
    renderTemplate(objectRepository, 'reset_password'),
  );

};
