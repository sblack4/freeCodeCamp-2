var http = require('http');  
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function (req, res) {  
 // console.log(req.headers);
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);
})  
server.listen(process.argv[2]);
