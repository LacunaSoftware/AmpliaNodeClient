'use strict';

class IssueSoftwareCertificateResponse {

	constructor({ model,
		certificateDer,
		certificatePem,
		publicKeyDer,
		publicKeyPem,
		privateKeyPkcs8Der,
		privateKeyPkcs8Pem,
		privateKeyPkcs12Der,
		privateKeyPkcs12Pem } = {}) {
		this._model = model || null;
		this._certificateDer = certificateDer || null;
		this._certificatePem = certificatePem || null;
		this._publicKeyDer = publicKeyDer || null;
		this._publicKeyPem = publicKeyPem || null;
		this._privateKeyPkcs8Der = privateKeyPkcs8Der || null;
		this._privateKeyPkcs8Pem = privateKeyPkcs8Pem || null;
	}

	//endregion

	//region "model" Accessors


	get model() {
		return this._model;
	}


	set model(value) {
		this._model = value;
	}

	//endregion

	//endregion

	//region "certificateDer" Accessors


	get certificateDer() {
		return this._certificateDer;
	}


	set certificateDer(value) {
		this._certificateDer = value;
	}

	//endregion

	//region "certificatePem" Accessors



	get certificatePem() {
		return this._certificatePem;
	}


	set certificatePem(value) {
		this._certificatePem = value;
	}

	//endregion

	//region "publicKeyDer" Accessors


	get publicKeyDer() {
		return this._publicKeyDer;
	}


	set publicKeyDer(value) {
		this._publicKeyDer = value;
	}

	//endregion

	//region "publicKeyPem" Accessors


	get publicKeyPem() {
		return this._publicKeyPem;
	}


	set publicKeyPem(value) {
		this._publicKeyPem = value;
	}

	//endregion

	//region "privateKeyPkcs8Der" Accessors

	get privateKeyPkcs8Der() {
		return this._privateKeyPkcs8Der;
	}


	set privateKeyPkcs8Der(value) {
		this._privateKeyPkcs8Der = value;
	}

	//endregion

	//region "privateKeyPkcs8Pem" Accessors



	get privateKeyPkcs8Pem() {
		return this._privateKeyPkcs8Pem;
	}



	set privateKeyPkcs8Pem(value) {
		this._privateKeyPkcs8Pem = value;
	}

	toModel() {
		return {
			model: this._model,
			certificateDer: this._certificateDer,
			certificatePem: this._certificatePem,
			publicKeyDer: this._publicKeyDer,
			publicKeyPem: this._publicKeyPem,
			privateKeyPkcs8Der: this._privateKeyPkcs8Der,
			privateKeyPkcs8Pem: this._privateKeyPkcs8Pem,
			privateKeyPkcs12Der: this._privateKeyPkcs12Der,
			privateKeyPkcs12Pem: this._privateKeyPkcs12Pem
		};
	}
}

exports.IssueSoftwareCertificateResponse = IssueSoftwareCertificateResponse;