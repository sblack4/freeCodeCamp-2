var http = require('http');

var url = process.argv[2];

function printData(resp) {
	resp.on("data", function(data){
		console.log(data.toString());
	})
}

http.get(url, printData);
