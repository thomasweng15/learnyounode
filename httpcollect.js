var concat = require('concat-stream');
var http = require('http');

http.get(process.argv[2], function (resp) {
	resp.on('error', function (err) { 
		return console.error(err); 
	});
	resp.pipe(concat(function (buf) {
		var str = buf.toString();
		console.log(str.length);
		console.log(str);
	}));
});
