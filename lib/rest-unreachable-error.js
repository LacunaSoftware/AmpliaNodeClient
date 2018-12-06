'use strict';
const { RestBaseError } = require('./rest-base-error');

class RestUnreachableError extends RestBaseError {

	constructor(verb, url, innerError = null) {
		super( `REST action ${verb} ${url} unreachable`, verb, url, innerError);
	}
}

exports.RestUnreachableError = RestUnreachableError;