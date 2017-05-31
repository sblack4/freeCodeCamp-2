var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', function(req, res) {
  console.log(req.body.str);
  var backwards = req.body.str.split('').reverse().join('');
  res.end(backwards);
})
app.listen(process.argv[2]);
