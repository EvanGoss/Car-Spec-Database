var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client'));

var config = {
  port: 3000
};

// app.get('/', function(req, res) {
//   // console.log('req:', req);
//   // console.log('res:', res);
//   res.send('Hello world!');
// });

app.listen(config.port, function() {
  console.log('Express server listening on port', config.port);
});