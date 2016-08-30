var express = require('express');
var app = express();

var config = {
  port: 3000
};

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.listen(config.port, function() {
  console.log('Express server listening on port', config.port);
});