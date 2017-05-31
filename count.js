var mongo = require('mongodb').MongoClient;

var arg1 = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var parrots = db.collection('parrots');
  parrots.count({
    age: {
        $gt: +arg1
      }
    }, function(err, docs) {
    if (err) throw err;
    console.log(docs);
    db.close();
  })
})
