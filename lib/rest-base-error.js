'use strict';

class RestBaseError extends Error {

	constructor(message, verb, url, innerError = null) {
		super(message);

		this._name = this.constructor.name;
		this._code = null;
		this._verb = verb;
		this._url = url;

		// Build stack trace.
		Error.captureStackTrace(this, this.constructor);
		if (innerError && innerError.stack) {
			this.stack += '\n';
			this.stack += innerError.stack;
		}
	}

	//region "name" Accessors

	getName() {
		return this._name;
	}

	get name() {
		return this._name;
	}

	setName(value) {
		this._name = value;
	}

	set name(value) {
		this._name = value;
	}

	//endregion

	//region "code" Accessors

	getCode() {
		return this._code;
	}

	get code() {
		return this._code;
	}

	setCode(value) {
		this._code = value;
	}

	set code(value) {
		this._code = value;
	}

	//endregion

	//region "verb" Accessors

	getVerb() {
		return this._verb;
	}

	get verb() {
		return this._verb;
	}

	setVerb(value) {
		this._verb = value;
	}

	set verb(value) {
		this._verb = value;
	}

	//endregion

	//region "url" Accessors

	getUrl() {
		return this._url;
	}

	get url() {
		return this._url;
	}

	setUrl(value) {
		this._url = value;
	}

	set url(value) {
		this._url = value;
	}

	//endregion
}

exports.RestBaseError = RestBaseError;