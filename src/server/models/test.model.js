const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema({
    time: {type: Date, required: true},
    type: {type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Test', TestSchema);