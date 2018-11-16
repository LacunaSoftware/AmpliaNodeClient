'use strict';
const { RestBaseError } = require('./rest-base-error');

class AmpliaError extends RestBaseError {

	constructor(verb, url, errorCode, detail) {
		let message = `Amplia action ${verb} ${url} error: ${errorCode}`;
		if (detail) {
			message += ` (${detail})`;
		}
		super('AmpliaError', message, verb, url);

		this._errorCode = errorCode;
		this._detail = detail;

		Error.captureStackTrace(this, this.constructor);
	}

	//region "errorCode" Accessors

	getErrorCode() {
		return this._errorCode;
	}

	get errorCode() {
		return this._errorCode;
	}

	setErrorCode(value) {
		this._errorCode = value;
	}

	set errorCode(value) {
		this._errorCode = value;
	}

	//endregion

	//region "detail" Accessors

	getDetail() {
		return this._detail;
	}

	get detail() {
		return this._detail;
	}

	setDetail(value) {
		this._detail = value;
	}

	set detail(value) {
		this._detail = value;
	}

	//endregion
}

exports.AmpliaError = AmpliaError;