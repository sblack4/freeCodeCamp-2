var mongo = require('mongodb').MongoClient;

var arg1 = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var parrots = db.collection('prices');
  parrots.aggregate([
    { $match: { size: arg1 } }
    , { $group: {
      _id: 'avg'
      , avg: {
        $avg: '$price'
      }
    } }
  ]).toArray(function(err, docs) {
    if (err) throw err;
    console.log(Number(docs[0].avg).toFixed(2));
    db.close();
  })
})
