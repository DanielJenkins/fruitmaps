var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var Owner = require('./private/models/ownerModel.js');
var Harvester = require('./private/models/harvesterModel.js');
var Tree = require('./private/models/treeModel.js');
var db = require('./private/config.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('application/public'));

mongoose.connect(db.db, function(err) {
  if (err) throw err;
  console.log('connected!');
});

app.use(express.static('./application/public'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/public/html/index.html');
});

app.post('/newTree', function(req, res) {
  console.log('posting a tree');
  new Tree({
    treeName: req.body.treeName,
    treeLocation: req.body.treeLocation,
    treeFlavor: req.body.treeFlavor,
    treeComment: req.body.treeComment,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    status: req.body.status
  }).save(function(err,doc) {
    if(err) {
      res.json(err);
    }
    else {
      console.log('marking');
      res.redirect('/#/results');
    }
  });
});

app.post('/search', jsonParser, function(req, res) {
    Tree.find(req.body.searchObj, function(err, trees) {
      if (err) {
        throw err;
      }
      else {
        res.send(trees);
      };
    }).limit(30);
  });

app.get('/trees', function(req, res) {
  Tree.find(function(err, trees) {
    if (err) {
      throw err;
    }
    else {
      res.send(trees);
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

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('App is running, get some fruit!');
});