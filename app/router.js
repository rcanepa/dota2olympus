'use strict';

var logFilename = '[' + __filename + ']';

exports.route = function (routes, pathname, response, request){
	console.log(logFilename, 'About to route a request for ' + pathname);
	if(typeof(routes[pathname]) === 'function'){
		routes[pathname](request, response);
	}
	else{
		console.log('No request handler found for ' + pathname)
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.write('404 - Site not found');
		response.end();
	}
}