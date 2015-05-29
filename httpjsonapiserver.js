var http = require('http');
var url = require('url');

function parsetime(time) {
	json = {
		"hour": time.getHours(),
		"minute": time.getMinutes(),
		"second": time.getSeconds()
	};
	return JSON.stringify(json);
}

function unixtime(time) {
	json = {
		"unixtime": time.getTime()
	};
	return JSON.stringify(json);
}

var server = http.createServer(function (req, res) {
	var result = undefined
	var parsedUrl= url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	if (parsedUrl.pathname == '/api/parsetime') {
		result = parsetime(time);
	} else if (parsedUrl.pathname == '/api/unixtime') {
		result = unixtime(time);
	}

	if (result) {
		res.writeHead(200, { 'content-type' : 'application/json' } );	
		return res.end(result);
	} else {
		res.writeHead(404);
		return res.end();
	}
});
server.listen(+process.argv[2]);
