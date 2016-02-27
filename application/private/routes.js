var express = require('express');
var mongeoose = require('mongoose');
var Owner = require('./models/ownerModel.js');
var Harvester = require('./models/harvesterModel.js');
var Tree = require('./models/treeModel.js');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = {

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

};