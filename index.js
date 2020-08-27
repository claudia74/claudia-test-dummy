/*
 * claudia-test-dummy
 */

'use strict';

/**
 * Return dummy string
 *
 * @param  {String} `a`
 */

function test(str) {
	var dummy = 'claudia test string: ' + str;
	return dummy;
}

/**
 * Expose `claudia-test-dummy`
 */

module.exports = test;
