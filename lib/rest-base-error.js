'use strict';

class RestBaseError extends Error {

	constructor(name, message, verb, url) {
		super(message);
		this._name = name;
		this._verb = verb;
		this._url = url;

		Error.captureStackTrace(this, this.constructor);
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