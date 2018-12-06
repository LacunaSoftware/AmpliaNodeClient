'use strict';
const { RestBaseError } = require('./rest-base-error');

class AmpliaError extends RestBaseError {

	constructor(verb, url, model, innerError = null) {
		let message = `Amplia API error ${model['code']}: ${model['message']}`;
		super(message, verb, url, innerError);
		this._code = model['code'];

		this._errorMessage = model['message'];
	}

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