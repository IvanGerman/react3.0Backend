// books endpoint is not used in this application

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  }
);

module.exports = mongoose.model('books', BookSchema);
