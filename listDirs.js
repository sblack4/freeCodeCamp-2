var fs = require('fs');

fs.readdir(process.argv[2], function(err, dirs){ 
	if(err){
		console.log("error"+err.message);
		 return;
	}
	for(var i=0;i<dirs.length;i++){
		if(process.argv[3] &&  dirs[i].split('.')[1] !== process.argv[3]) continue;
		console.log(dirs[i]);
	}
})
