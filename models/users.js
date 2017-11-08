const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
  name: String,
  email: String,
  password: String,
});

module.exports = User;
