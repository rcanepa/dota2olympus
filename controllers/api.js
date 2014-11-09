var secrets = require('../config/secrets.json')
var https = require('https');
var fs = require('fs');
var logFilename = '[' + __filename + ']';

exports.indexAPI = function(request, response){
	console.log(logFilename, 'Request handler "indexAPI" was called.');
	var response_data = '';
	var host = 'https://api.steampowered.com',
		path = '/IDOTA2Match_570/GetMatchHistory/V001/?key=' + secrets.steamkey + '&matches_requested=1&account_id=cohetin';
	var url = host + path;

	var req = https.request(url, function(res) {
	  	console.log('STATUS: ' + res.statusCode);
	  	console.log('HEADERS: ' + JSON.stringify(res.headers));
	  	var writeStream = fs.createWriteStream('./json_respnse.json');
	  	res.pipe(writeStream);
	  	res.pipe(response);
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.end();
}

exports.dummy1 = function(request, response){
	console.log(logFilename, 'Request handler "dummy1" was called.');
  	response.writeHead(200, {'content-type': 'text/html'});
  	response.write('Hello from the dummy1 route');
  	response.end();
}

exports.dummy2 = function(request, response){
	console.log(logFilename, 'Request handler "dummy2" was called.');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Hello from the dummy2 route');
  	response.end();
}
