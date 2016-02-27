var express = require('express');
var app = express();

app.use(express.static('./application/public'))

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html')
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('server up on ' + port);