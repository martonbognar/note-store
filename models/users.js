const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User;
