const Schema = require('mongoose').Schema;
const db = require('../config/db');

const noteSchema = new Schema({
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
  creation: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

noteSchema.methods.updateViewCount = function() {
  this.viewCount++;
  this.save();
};

noteSchema.methods.getPrettyDate = function() {

};

const Note = db.model('Note', noteSchema);

module.exports = Note;
