var mongo = require('mongodb').MongoClient;

var arg2 = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  var collection = db.collection('parrots');
  collection.find({
  }).toArray(function(err, docs) {
    var olderArray = [];
    for(var i = 0; i < docs.length; i++) {
	if(docs[i].age > parseInt(arg2)) {
          olderArray.push(docs[i]); //console.log(docs[i]);
        }
    } 
    console.log(olderArray);
  })
  db.close();
})
