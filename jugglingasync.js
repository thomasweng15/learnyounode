var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2, process.argv.length);
var list = [];
urls.forEach(function () {
	list.push('');
});
respNum = 0;

urls.forEach(function (item, index) {
	http.get(item, function(resp) {
		resp.pipe(bl(function (err, data) {
			if (err) 
				return console.error(err);
			list[index] = data.toString();
			respNum++;
			if (respNum == list.length) 
				console.log(list.join('\n'));
		}));
	})
});


