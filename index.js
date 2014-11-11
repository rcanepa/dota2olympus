'use strict';

var server = require('./app/server'),
	router = require('./app/router'),
	routes = require('./app/routes');

var baseDir = __dirname;

server.start(router.route, routes.routes, baseDir);