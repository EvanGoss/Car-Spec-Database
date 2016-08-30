var express = require('express');
var app = express();
app.use(express.static('../client'));

var config = {
  port: 3000
};

var database = require('mongodb');
var assert = require('assert');

// Database connection URL
var url = 'mongodb://localhost:27017/cars';

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log(new Date(), 'Inserted 3 documents into the collection');
    callback(result);
  });
};

// Use connect method to connect to the server
database.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log(new Date(), 'Connected successfully to database');

  insertDocuments(db, function() {
    db.close();
  });
});

// Default route test:
// app.get('/', function(req, res) {
//   // console.log('req:', req);
//   // console.log('res:', res);
//   res.send('Hello world!');
// });

app.listen(config.port, function() {
  console.log(new Date(), 'Express server listening on port', config.port);
});