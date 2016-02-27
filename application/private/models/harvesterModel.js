var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var harvesterSchema = new Schema({
  name: {type: String, required: true},
  organizaiton: {type: String},
  dateCreated: {type: Date, required: true}
});
var harvesters = mongoose.model('harvesters', harvesterSchema);

module.exports = harvesters;