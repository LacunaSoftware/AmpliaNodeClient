'use strict';
const { RestBaseError } = require('./rest-base-error');

class RestError extends RestBaseError {

	constructor(verb, url, statusCode, errorMessage) {
		errorMessage = errorMessage || null;
		let message = `REST action ${verb} ${url} returned HTTP error ${statusCode}`;
		if (errorMessage && errorMessage.length > 0) {
			message += ': ' + errorMessage;
		}
		super('RestError', message, verb, url);

		this._statusCode = statusCode;
		this._errorMessage = errorMessage;

		Error.captureStackTrace(this, this.constructor);
	}

	//region "statusCode" Accessors

	getStatusCode() {
		return this._statusCode;
	}

	get statusCode() {
		return this._statusCode;
	}

	setStatusCode(value) {
		this._statusCode = value;
	}

	set statusCode(value) {
		this._statusCode = value;
	}

	//endregion

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