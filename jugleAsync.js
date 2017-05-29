var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var body1;
var body2;
var body3;

http.get(url1, function(res) { 
  res.setEncoding('utf8');
  var bodyChunks = [];
  res.on('data', function(chunk) {
    bodyChunks.push(chunk.toString());
  }).on('end', function() {
    body1 = bodyChunks.join('');
   // console.log("body1", body1);
    url1 = null;
  })
})

http.get(url2, function(res) { 
  res.setEncoding('utf8');
  var bodyChunks = [];
  res.on('data', function(chunk) {
    bodyChunks.push(chunk.toString());
  }).on('end', function() {
    body2 = bodyChunks.join('');
   // console.log("body2", body2);
    url2 = null;
  })
})

http.get(url3, function(res) { 
  res.setEncoding('utf8');
  var bodyChunks = [];
  res.on('data', function(chunk) {
    bodyChunks.push(chunk.toString());
  }).on('end', function() {
    body3 = bodyChunks.join('');
   // console.log("body1", body1);
    url3 = null;
  })
})

function logInOrder(){
  console.log(body1);
  console.log(body2);
  console.log(body3);
}

function awaitAsync() {
  if(url1 || url2 || url3){
    setTimeout(function(){ awaitAsync(); }, 3000);
  }else{
    logInOrder();
  }
}
awaitAsync();


