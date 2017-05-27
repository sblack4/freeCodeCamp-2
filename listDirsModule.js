var fs = require('fs');

module.exports = function readFiles(dir, filter, callback) { 
	fs.readdir(dir,function(error, dirs){
		if(error){
	 		callback(error);
			return;
		}
		if(filter)
			dirs = dirs.filter(function(val){ if(filter === val.split(".")[1]) return val; });
		callback(error, dirs);
	}); 
}
