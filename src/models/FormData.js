const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FormDataSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    formData: {
      firstName: {
        type: String,
        required: true,
        unique: false
      },
      lastName: {
        type: String,
        required: true,
        unique: false
      },
      email: {
        type: String,
        required: true,
        unique: false
      },
      password: {
        type: String,
        required: true,
        unique: false
      },
      productType: {
        type: String,
        required: true,
        unique: false
      },
      acceptedTerms: {
        type: Boolean,
        required: true,
        unique: false
      },
    }
  }
);

module.exports = mongoose.model('formData', FormDataSchema);
