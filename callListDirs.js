var listDirs = require('./listDirsModule.js');

var dir = process.argv[2];

var filter = process.argv[3];

function callback(err, dirs){
	if(err){
		console.log(err);
		return;
	}
	for(var i=0; i<dirs.length;i++) {
		console.log(dirs[i]);
	}
}

listDirs(dir, filter, callback);
