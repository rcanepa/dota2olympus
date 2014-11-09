var steam = require('./steamAPIkey.json')
var https = require('https');
var fs = require('fs');
var logFilename = '[' + __filename + ']';

function start(response){
	console.log(logFilename, 'Request handler "start" was called.');
	var response_data = '';
	var host = 'https://api.steampowered.com',
		path = '/IDOTA2Match_570/GetMatchHistory/V001/?key=' + steam.key + '&matches_requested=1&account_id=cohetin';
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

function upload(response, request){
	console.log(logFilename, 'Request handler "upload" was called.');
  	response.writeHead(200, {'content-type': 'text/html'});
  	response.write('Hello from the upload route');
  	response.end();
}

function show(response){
	console.log(logFilename, 'Request handler "show" was called.');
	response.writeHead(200, {'Content-Type': 'img/jpeg'});
	response.write('Hello from the upload show');
  	response.end();
}

exports.start = start;
exports.upload = upload;
exports.show = show;