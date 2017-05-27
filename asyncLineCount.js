var fs = require('fs');

var input = process.argv[2].toString();

function countLines(err, data){
	if(err){
		console.log('error', err.message);
		return;
	}
	console.log(data.split("\n").length-1);
}
fs.readFile(input, 'utf8', countLines);
