var express = require('express');
// var stylus = require('stylus');

var app = express();

app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public')));
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.get('/home', function(req, res) {

  res.end();
})
app.listen(process.argv[2]);
