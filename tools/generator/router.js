'use strict';

var indigo = require('indigojs');

module.exports = function(router, app) {

	var conf = {
		'base': '{{uri}}',
		'controllers': [
			'{{controllers}}'
		]
	};

	app.get('/', function(req, res) {
		res.redirect(router.conf.base + '/index');
	});

	router.get('/', function(req, res) {
		res.redirect(router.conf.base + '/index');
	});

	router.get('/index', function(req, res) {
		indigo.getLocale(req);
		res.redirect(router.conf.base + '/' + req.session.locale + '/index');
	});

	return conf;
};