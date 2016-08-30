var express = require('express');
var app = express();
app.use(express.static('../client'));

var config = {
  port: 3000
};

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log(new Date(), 'connected to database named', db.name, 'on port', db.port);
});

var makeSchema = mongoose.Schema({
  id: Number,
  name: String,
  niceName: String,
  models: Array
});

var modelSchema = mongoose.Schema({
  id: String,
  name: String,
  niceName: String,
  years: Array
});

var modelYearSchema = mongoose.Schema({
  id: Number,
  year: Number
});

var Make = mongoose.model('Make', makeSchema);
var Model = mongoose.model('Model', modelSchema);
var ModelYear = mongoose.model('ModelYear', modelYearSchema);


// Default route test:
// app.get('/', function(req, res) {
//   // console.log('req:', req);
//   // console.log('res:', res);
//   res.send('Hello world!');
// });

app.listen(config.port, function() {
  console.log(new Date(), 'Express server listening on port', config.port);
});