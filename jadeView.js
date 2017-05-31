var express = require('express');
var path = require('path');

var app = express();
console.log(process.argv[3]);
app.set('views', process.argv[3]);
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
})

app.listen(process.argv[2]);
