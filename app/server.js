'use strict';

var connect = require('connect'),
	serveStatic = require('serve-static'),
	url = require('url'),
	settings = require('../config/settings.json');

var logFilename = '[' + __filename + ']';

function start(route, routes, baseDir){
	
	var app = connect();

	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log(logFilename, 'Request for ' + pathname + ' received.');
		route(routes, pathname, response, request);
	}
	
	app.use(serveStatic(baseDir + '/public'));

	app.use(onRequest);

	app.listen(settings.port, function(){
		console.log(logFilename, 'Static folder ' + baseDir + '/public');
		console.log(logFilename, 'Listening on port ' + settings.port);
	});
}

exports.start = start;