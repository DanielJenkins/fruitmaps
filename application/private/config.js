module.exports = {
  mongoose.connect('mongodb://monologuser:monologpassword@ds059195.mongolab.com:59195/appname', function(err) {
      if (err) throw err;
      console.log('connected!');
    });

  var port = process.end.PORT || 3000;
  app.listen(port, function {
    console.log('App is running, get some fruit!');
  })
};