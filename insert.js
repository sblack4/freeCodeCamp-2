var mongo = require('mongodb').MongoClient;

var arg2 = process.argv[2];
var arg3 = process.argv[3];
var url = 'mongodb://localhost:27017/learnyoumongo';

var obj = {};
obj['firstName'] = arg2;
obj['lastName'] = arg3;
obj = JSON.stringify(obj);

mongo.connect(url, function(err, db) {
  if (err) throw err;
  console.log(obj);
  var collection = db.collection('docs');
  collection.insert(
    obj
  , function(err, docs) {
    if (err) throw err;
    // console.log(docs);
    db.close();
  });
})
