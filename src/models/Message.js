const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    message: {
      type: String,
      required: true,
      unique: false
    }
  }
);

module.exports = mongoose.model('messages', MessageSchema);
