var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var treeSchema = new Schema({
  name: {type: String},
  treeLocation: {type: String},
  treeFlavor: {type: String},
  treeComment: {type: String},
  contactName: {type: String},
  contactNumber: {type: String},
  status: {type: Number} //0 = empty, 1 = on the way, 2 = full
});
var trees = mongoose.model('trees', treeSchema);

module.exports = trees;