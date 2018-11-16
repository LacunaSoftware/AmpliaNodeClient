'use strict';
const { QRCodeTypes } = require('./enums');

class QRCodeData {

	constructor({ qrCodeType, endpoint } = {}) {
		this._qrCodeType = qrCodeType || null;
		this._endpoint = endpoint || null;
	}

	//region "qrCodeType" Accessors

	getQRCodeType() {
		return this._qrCodeType;
	}

	get qrCodeType() {
		return this._qrCodeType;
	}

	setQRCodeType(value) {
		this._qrCodeType = value;
	}

	set qrCodeType(value) {
		this._qrCodeType = value;
	}

	//endregion

	//region "endpoint" Accessors

	getEndpoint() {
		return this._endpoint;
	}

	get endpoint() {
		return this._endpoint;
	}

	setEndpoint(value) {
		this._endpoint = value;
	}

	set endpoint(value) {
		this._endpoint = value;
	}

	//endregion
}

class CertificateIssueQRCodeData extends QRCodeData {

	constructor({ secret, ...model }) {
		super(model);
		this._qrCodeType = QRCodeTypes.CERTIFICATE_ISSUE;

		this._secret = secret || null;
	}

	//region "secret" Accessors

	getSecret() {
		return this._secret;
	}

	get secret() {
		return this._secret;
	}

	setSecret(value) {
		this._secret = value;
	}

	set secret(value) {
		this._secret = value;
	}

	//endregion
}

exports.CertificateIssueQRCodeData = CertificateIssueQRCodeData;
exports.QRCodeData = QRCodeData;