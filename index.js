const express = require('express');
const app = express();

app.set('view engine', 'ejs');

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

app.use(express.static('static'));

const server = app.listen(3000, function () {
  console.log("Running on port 3000.")
});
