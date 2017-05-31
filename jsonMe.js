var express = require('express');
var fs = require('fs');

var app = express();

var fh = fs.readFile(process.argv[3], function(err, data) {
  if (err) {
    console.log(err.message);
    return;
  }
  //console.log(data.toString());
  return data.toString();
})

app.all('/:name', function(req, res) {
fs.readFile(process.argv[3], function(err, data) {
  if (err) {
    console.log(err.message);
    return;
  }
  //console.log(data.toString());
  var fh = data.toString();
  console.log(req.params.name);
  console.log(typeof(fh));
  res.json(JSON.parse(fh));
  res.end("hit it");
})

})

app.listen(process.argv[2]);
