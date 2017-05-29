var net = require('net');
var sTime = require('strftime');
  
var server = net.createServer(function (socket) {  
  socket.end(sTime('%F %H:%M').toString() + '\n'); 
})  
server.listen(process.argv[2]) 
