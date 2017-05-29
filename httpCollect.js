var http = require('http');

var url = process.argv[2];

var bodyStuff = [];

http.get(url, function(res) { 
  res.setEncoding('utf8');
  var bodyChunks = [];
  res.on('data', function(chunk) {
    bodyChunks.push(chunk.toString());
  }).on('end', function() {
    var body = bodyChunks.join('');
    bodyStuff.push(body);
    // console.log(body);
    fin();
  })
})
function fin(){
var contentLength=0;

for(var i=0; i< bodyStuff.length;i++) {
	contentLength += bodyStuff[i].length;
}
console.log(contentLength);
for(var i=0; i< bodyStuff.length;i++) {
	console.log(bodyStuff[i]);
}
}
