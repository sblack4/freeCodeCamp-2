var http = require('http');  
var fs = require('fs');

var fileLocation = process.argv[3];
var fileStream = fs.createReadStream(fileLocation);

var server = http.createServer(function (req, res) {  
  fileStream.pipe(res);

})  
server.listen(process.argv[2]);
