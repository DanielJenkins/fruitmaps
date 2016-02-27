var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var treeSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  contactName: {type: String, required: true},
  contactNumber: {type: String, required: true},
  status: {type: Number}, //0 = empty, 1 = on the way, 2 = full
});
var trees = mongoose.model('trees', treeSchema);

module.exports = trees;