'use strict';

/**
 * Description
 * @method exports
 * @param {} appconf
 * @return ObjectExpression
 */
module.exports = function reqmodel(appconf) {

	var env = appconf.get('environment'),
		minify = env === 'dev' ? '' : '.min';

	return {
		environment: env,
		minify: minify,
		extCSS: minify + '.css',
		extJS: minify + '.js',
		locality: {},
		locales: {}
	};
};