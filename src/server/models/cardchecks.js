const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardcheckSchema = new Schema({
  created: {
    type: Date,
    required: true
  },
  idZkTeco: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Cardcheck', cardcheckSchema);