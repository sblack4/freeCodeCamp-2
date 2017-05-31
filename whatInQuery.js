var express = require('express');
var url = require('url');

var app = express();

function splitSearch(search){
  var searchArray = search.split('&');
  var searchObj = {};
  for(var i = 0; i < searchArray.length; i++) {
    var keyValue = searchArray.split('=');
    searchObj[keyValue[0]] = keyValue[1];
  }
  return searchObj;
}

app.get('/search/', function(req, res) {
  var query = url.parse(req.url, true).query;
  // console.log(query);
  // var search = splitSearch(query);
  res.send(query);
  res.end();
})

app.listen(process.argv[2]);
