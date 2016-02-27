var mongoose = require('mongoose');
vas Schema = mongoose.Schema;

var harvesterSchema = new Schema({
  name: {type: String, required: true},
  organizaiton: {type: String},
  dateCreated: {type: Date, required: true}
});