var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ownerSchema = new Schema({
  name: {type: String, required: true},
  dateCreated: {type: Date, required: true}
});
var owners = mongoose.model('owners', ownerSchema);

module.exports = owners;