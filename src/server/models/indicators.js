const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indicatorSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  backgroudColor:{
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  }

});

module.exports = mongoose.model('Indicator', indicatorSchema);