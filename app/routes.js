'use strict';

var api = require('./api');

exports.routes = {
	'/index': api.indexAPI,
	'/dummy1': api.dummy1,
	'/dummy2': api.dummy2
}