var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var Owner = require('./private/models/ownerModel.js');
var Harvester = require('./private/models/harvesterModel.js');
var Tree = require('./private/models/treeModel.js');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./application/public'))

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html')
})

app.get('/trees', function(req, res) {
  Post.find(function(err, trees) {
    if (err) {
      throw err;
    }
    else {
      res.send(posts);
    };
  });
});

app.post('/search', jsonParser, function(req, res) {
  Tree.find(req.body.searchObj, function(err, posts) {
    if (err) {
      throw err;
    }
    else {
      res.send(posts);
    };
  });
});

require('./private/config.js');