var fs = require('fs');
var str = undefined;

fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
	if (err != true) { 
		console.log(data.split('\n').length - 1);
	}
});

