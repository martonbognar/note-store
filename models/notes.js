const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Note = db.model('Note', {
  title: String,
  body: String,
  viewCount: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = Note;
