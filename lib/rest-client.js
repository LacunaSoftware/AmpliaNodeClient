'use strict';
const request = require('request');

const { URL } = require('url');

const { AmpliaError } = require('./amplia-error');
const { RestError } = require('./rest-error');
const { RestUnreachableError } = require('./rest-unreachable-error');

class RestClient {

	constructor({ endpoint, apiKey, customHeaders } = {}) {
		this._endpointUri = endpoint || null;
		this._apiKey = apiKey || null;
		this._customRequestHeaders = customHeaders || {};
	}

	//region "endpointUri" Accessors

	getEndpointUri() {
		return this._endpointUri;
	}

	get endpointUri() {
		return this._endpointUri;
	}

	setEndpointUri(value) {
		this._endpointUri = value;
	}

	set endpointUri(value) {
		this._endpointUri = value;
	}

	//endregion

	//region "apiKey" Accessors

	getApiKey() {
		return this._apiKey;
	}

	get apiKey() {
		return this._apiKey;
	}

	setApiKey(value) {
		this._apiKey = value;
	}

	set apiKey(value) {
		this._apiKey = value;
	}

	//endregion

	//region "customRequestHeaders" Accessors

	getCustomRequestHeaders() {
		return this._customRequestHeaders;
	}

	get customRequestHeaders() {
		return this._customRequestHeaders;
	}

	setCustomRequestHeaders(value) {
		this._customRequestHeaders = value;
	}

	set customRequestHeaders(value) {
		this._customRequestHeaders = value;
	}

	//endregion

	addCustomRequestHeader(key, value) {
		this._customRequestHeaders[key] = value;
	}

	removeCustomRequestHeader(key) {
		if (key in this._customRequestHeaders) {
			delete this._customRequestHeaders[key];
		}
	}

	get(url) {
		return new Promise((resolve, reject) => {
			const verb = 'GET';
			let requestUrl = new URL(url, this._endpointUri);
			let params = this._getRequestParams();
			try {
				request.get(requestUrl, params, (error, response) => {
					let err = RestClient._checkResponse(verb, url, error, response);
					if (err) {
						reject(err);
						return;
					}
					resolve(Response.getInstance(response));
				});
			} catch (err) {
				throw new RestUnreachableError(verb, url);
			}
		});
	}

	post(url, data) {
		return new Promise((resolve, reject) => {
			const verb = 'POST';
			let requestUrl = new URL(url, this._endpointUri);
			let params = this._getRequestParams(data);
			try {
				request.post(requestUrl, params, (error, response) => {
					let err = RestClient._checkResponse(verb, url, error, response);
					if (err) {
						reject(err);
						return;
					}
					resolve(Response.getInstance(response));
				});
			} catch (err) {
				throw new RestUnreachableError(verb, url);
			}
		});
	}

	del(url) {
		return new Promise((resolve, reject) => {
			const verb = 'DELETE';
			let requestUrl = new URL(url, this._endpointUri);
			let params = this._getRequestParams();
			try {
				request.delete(requestUrl, params, (error, response) => {
					let err = RestClient._checkResponse(verb, url, error, response);
					if (err) {
						reject(err);
						return;
					}
					resolve(Response.getInstance(response));
				});
			} catch (err) {
				throw new RestUnreachableError(verb, url);
			}
		});
	}

	_getRequestParams(data) {
		data = data || null;

		let headers = { 'X-Api-Key': this._apiKey };
		if (this._customRequestHeaders) {
			for (let header in this._customRequestHeaders) {
				if (this._customRequestHeaders.hasOwnProperty(header)) {
					headers[header] = this._customRequestHeaders[header];
				}
			}
		}

		return {
			json: true,
			headers: headers,
			body: data ? data.toModel() : null
		};
	}

	static _checkResponse(verb, url, error, response) {

		let body = {};
		let status = 500;
		if (response) {
			status = response.statusCode;
			body = response.body;
		}

		let err = null;
		try {
			if (error || status < 200 || status > 299) {
				if (status === 422 && body.code) {
					err = new AmpliaError(verb, url, body.code, body.detail);
				} else {
					err = new RestError(verb, url, status, body.message);
				}
			}
		} catch(_err) {
			err = new RestError(verb, url);
		}
		return err;
	}
}

class Response {

	constructor({ body, code, headers } = {}) {
		this._body = body || null;
		this._statusCode = code || null;
		this._headers = headers || null;
	}

	static getInstance(response) {
		return new Response({
			body: response.body,
			statusCode: response.statusCode,
			headers: response.headers
		});
	}

	//region "body" Accessors

	getBody() {
		return this._body;
	}

	get body() {
		return this._body;
	}

	setBody(value) {
		this._body = value;
	}

	set body(value) {
		this._body = value;
	}

	//endregion

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

	//region "headers" Accessors

	getHeaders() {
		return this._headers;
	}

	get headers() {
		return this._headers;
	}

	setHeaders(value) {
		this._headers = value;
	}

	set headers(value) {
		this._headers = value;
	}

	//endregion

	getHeader(headerKey) {
		if (headerKey in this._headers) {
			return this._headers[headerKey];
		} else if (headerKey.toLowerCase() in this._headers) {
			return this._headers[headerKey.toLowerCase()];
		}
		return null;
	}
}

exports.Response = Response;
exports.RestClient = RestClient;