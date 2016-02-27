var mongoose = require('mongoose');
vas Schema = mongoose.Schema;

var ownerSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String},
  status: {type: Number}, //0 = empty, 1 = on the way, 2 = full
  dateCreated: {type: Date, required: true}
});