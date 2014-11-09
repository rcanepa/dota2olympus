var http = require('http');
var url = require('url');
var settings = require('./config/settings.json')

var logFilename = '[' + __filename + ']';

function start(router, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log(logFilename, 'Request for ' + pathname + 'received.');
		router(handle, pathname, response, request);
	}
	http.createServer(onRequest)
		.listen(settings.port, function(){
			console.log(logFilename, 'Listening on port ' + settings.port)
		});	
}

exports.start = start;