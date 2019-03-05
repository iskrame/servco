const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  isActive: {
    type: Boolean,
    required: true
  }
});

module.exports = roles = mongoose.model("roles", rolesSchema);
