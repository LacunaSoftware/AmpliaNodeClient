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
		this._privateKeyPkcs12Der = privateKeyPkcs12Der || null;
		this._privateKeyPkcs12Pem = privateKeyPkcs12Pem || null;
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

	//endregion

	//region "certificateDer" Accessors

	getCertificateDer() {
		return this._certificateDer;
	}

	get certificateDer() {
		return this._certificateDer;
	}

	setDertificateDer(value) {
		this._certificateDer = value;
	}

	set certificateDer(value) {
		this._certificateDer = value;
	}

	//endregion

	//region "certificatePem" Accessors

	getCertificatePem() {
		return this._certificatePem;
	}

	get certificatePem() {
		return this._certificatePem;
	}

	setCertificatePem(value) {
		this._certificatePem = value;
	}

	set certificatePem(value) {
		this._certificatePem = value;
	}

	//endregion

	//region "publicKeyDer" Accessors

	getPublicKeyDer() {
		return this._publicKeyDer;
	}

	get publicKeyDer() {
		return this._publicKeyDer;
	}

	setPublicKeyDer(value) {
		this._publicKeyDer = value;
	}

	set publicKeyDer(value) {
		this._publicKeyDer = value;
	}

	//endregion

	//region "publicKeyPem" Accessors

	getPublicKeyPem() {
		return this._publicKeyDer;
	}

	get publicKeyPem() {
		return this._publicKeyPem;
	}

	setPublicKeyPem(value) {
		this._publicKeyPem = value;
	}

	set publicKeyPem(value) {
		this._publicKeyPem = value;
	}

	//endregion

	//region "privateKeyPkcs8Der" Accessors

	getPrivateKeyPkcs8Der() {
		return this._publicKeyDer;
	}

	get privateKeyPkcs8Der() {
		return this._privateKeyPkcs8Der;
	}

	setPrivateKeyPkcs8Der(value) {
		this._privateKeyPkcs8Der = value;
	}

	set privateKeyPkcs8Der(value) {
		this._privateKeyPkcs8Der = value;
	}

	//endregion

	//region "privateKeyPkcs8Pem" Accessors

	getPrivateKeyPkcs8Pem() {
		return this._publicKeyPem;
	}

	get privateKeyPkcs8Pem() {
		return this._privateKeyPkcs8Pem;
	}

	setPrivateKeyPkcs8Pem(value) {
		this._privateKeyPkcs8Pem = value;
	}

	set privateKeyPkcs8Pem(value) {
		this._privateKeyPkcs8Pem = value;
	}

	//endregion

	//region "privateKeyPkcs8Pem" Accessors

	getPrivateKeyPkcs12Pem() {
		return this._publicKeyPem;
	}

	get privateKeyPkcs12Pem() {
		return this._privateKeyPkcs12Pem;
	}

	setPrivateKeyPkcs12Pem(value) {
		this._privateKeyPkcs12Pem = value;
	}

	set privateKeyPkcs12Pem(value) {
		this._privateKeyPkcs12Pem = value;
	}

	//endregion

	//region "privateKeyPkcs8Der" Accessors

	getPrivateKeyPkcs12Der() {
		return this._publicKeyDer;
	}

	get privateKeyPkcs12Der() {
		return this._privateKeyPkcs12Der;
	}

	setPrivateKeyPkcs12Der(value) {
		this._privateKeyPkcs12Der = value;
	}

	set privateKeyPkcs12Der(value) {
		this._privateKeyPkcs12Der = value;
	}

	//endregion

	toModel() {
		return {
			model: this._model,
			certificateDer: this_certificateDer,
			certificatePem: this_certificatePem,
			publicKeyDer: this_publicKeyDer,
			publicKeyPem: this_publicKeyPem,
			privateKeyPkcs8Der: this_privateKeyPkcs8Der,
			privateKeyPkcs8Pem: this_privateKeyPkcs8Pem,
			privateKeyPkcs12Der: this_privateKeyPkcs12Der,
			privateKeyPkcs12Pem: this_privateKeyPkcs12Pem
		};
	}
}

exports.IssueSoftwareCertificateResponse = IssueSoftwareCertificateResponse;