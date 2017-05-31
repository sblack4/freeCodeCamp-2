var mongo = require('mongodb').MongoClient;

var arg1 = process.argv[2];
var arg2 = process.argv[3];
var arg3 = process.argv[4];
var url = 'mongodb://localhost:27017/' + arg1;

mongo.connect(url, function(err, db) {
  if (err) {
    console.log(err);
    throw err;
  }
  // console.log(db);
  var collection = db.collection(arg2);
  collection.remove({
    _id: arg3
  }, function(err, docs) {
    if (err) throw err;
    console.log(docs);
    db.close();
  });
})
