var http = require('http');  
var strftime = require('strftime');
var tmap = require('through2-map');
var url = require('url');

function parseTime(time) {
  // console.log(time);
  var isoD = new Date().toISOString(time.split('=')[1]);
  var dt  = new Date().toISOString(time.split('=')[1]);
  console.log(dt);
  console.log(new Date().getMinutes(isoD))
  return JSON.stringify({ 
	"hour": new Date().getHours(dt)
	, "minute": new Date().getMinutes(dt)
	, "second": new Date().getSeconds(dt)
   });
}

function parseUnix(time) {
  // console.log("unix " + time); 
  return JSON.stringify({ 
   // "unixtime": new Date().getTime(new Date().toISOString(time.split('x')[1]))
    "unixtime": new Date().getTime(time.split('=')[1])
  });
}

function routeApi(url) {
  if(url.pathname === '/api/parsetime'){
    return parseTime(url.search);
  } else {
    return parseUnix(url.search);
  }
}

var server = http.createServer(function (req, res) {  
  var route = url.parse(req.url, true);
  console.log(route.href);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(routeApi(route));
})  
server.listen(process.argv[2]);
