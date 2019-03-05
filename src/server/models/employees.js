const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create de Schema of Employees
const employeesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  secondLastName: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
});

module.exports = employees = mongoose.model("employees", employeesSchema);
