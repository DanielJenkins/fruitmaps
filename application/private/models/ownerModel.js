var mongoose = require('mongoose');
vas Schema = mongoose.Schema;

var ownerSchema = new Schema({
  name: {type: String, required: true},
  dateCreated: {type: Date, required: true}
});