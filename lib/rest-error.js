'use strict';
const { RestBaseError } = require('./rest-base-error');

class RestError extends RestBaseError {

	constructor(verb, url, statusCode, errorMessage = null, innerError = null) {
		let message = `REST action ${verb} ${url} returned HTTP error ${statusCode}`;
		if (errorMessage) {
			message += ': ' + errorMessage;
		}
		super(message, verb, url, innerError);
		this._code = statusCode;

		this._errorMessage = errorMessage;
	}

	//region "errorMessage" Accessors

	getErrorMessage() {
		return this._errorMessage;
	}

	get errorMessage() {
		return this._errorMessage;
	}

	setErrorMessage(value) {
		this._errorMessage = value;
	}

	set errorMessage(value) {
		this._errorMessage = value;
	}

	//endregion
}

exports.RestError = RestError;