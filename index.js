const express = require('express');
const app = express();

const session = require('express-session');
const bodyParser = require('body-parser');

// set ejs as the templating engine
app.set('view engine', 'ejs');

// serve files from the static directory
app.use(express.static('static'));

app.use(session({
  secret: '5up3r53cr3t',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({
  extended: true
}));

// create a payload object for middlewares
app.use(function (request, response, next) {
  response.payload = {};
  return next();
});

// include the routes
require('./routes/general')(app);
require('./routes/notes')(app);

// error handler
app.use(function (error, request, response, next) {
  response.status(500).send('Server error.');
  // print stack trace
  console.error(error.stack);
});

const server = app.listen(3000, function () {
  console.log("Running on port 3000.")
});
