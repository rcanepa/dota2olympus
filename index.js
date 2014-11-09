var server = require('./server');
var router = require('./router')
var api = require('./controllers/api');

var handle = {};
handle['/'] = api.indexAPI;
handle['/dummy1'] = api.dummy1;
handle['/dummy2'] = api.dummy2;

server.start(router.route, handle);