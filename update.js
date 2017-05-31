var mongo = require('mongodb').MongoClient;

var arg2 = process.argv[2];
// var arg3 = process.argv[3];
var url = 'mongodb://localhost:27017/' + arg2;

mongo.connect(url, function(err, db) {
  if (err) {
    console.log(err);
    throw err;
  }
  // console.log(db);
  var collection = db.collection('users');
  collection.update({
    username: 'tinatime'
  }, { 
    $set: {
      age: 40
    }
  }, function(err, docs) {
    if (err) throw err;
    // console.log(docs);
    db.close();
  });
})
