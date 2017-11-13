const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Note = db.model('Note', {
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = Note;
