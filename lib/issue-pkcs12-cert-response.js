'use strict';

class IssuePkcs12CertificateResponse {

	constructor({ pfxContent, model } = {}) {
		this._pfxContent = pfxContent || null;
		this._model = model || null;
	}

	//region "pfxContent" Accessors

	getPfxContent() {
		return this._pfxContent;
	}

	get pfxContent() {
		return this._pfxContent;
	}

	setPfxContent(value) {
		this._pfxContent = value;
	}

	set pfxContent(value) {
		this._pfxContent = value;
	}

	//endregion

	//region "model" Accessors

	getModel() {
		return this._model;
	}

	get model() {
		return this._model;
	}

	setModel(value) {
		this._model = value;
	}

	set model(value) {
		this._model = value;
	}

	//endregion
	
	toModel() {
		return {
			pfxContent: this._pfxContent,
			model: this._model,
		};
	}
}

exports.IssuePkcs12CertificateResponse = IssuePkcs12CertificateResponse;