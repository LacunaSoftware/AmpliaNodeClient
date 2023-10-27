'use strict';

class IssuePkcs12CertificateRequest {

	constructor({ orderId, password, keySize } = {}) {
		this._orderId = orderId || null;
		this._password = password || null;
		this._keySize = keySize || null;
	}

	//region "orderId" Accessors

	getOrderId() {
		return this._orderId;
	}

	get orderId() {
		return this._orderId;
	}

	setOrderId(value) {
		this._orderId = value;
	}

	set orderId(value) {
		this._orderId = value;
	}

	//endregion

	//region "password" Accessors

	getPassword() {
		return this._password;
	}

	get password() {
		return this._password;
	}

	setPassword(value) {
		this._password = value;
	}

	set password(value) {
		this._password = value;
	}

	//endregion

	//region "keySize" Accessors
	
	getKeySize() {
		return this._keySize;
	}

	get keySize() {
		return this._keySize;
	}
	
	setKeySize(value) {
		this._keySize = value;
	}
	
	set keySize(value) {
		this._keySize = value;
	}
	
	//endregion
	
	toModel() {
		return {
			orderId: this._orderId || '00000000-0000-0000-0000-000000000000',
			password: this._password,
			keySize: this._keySize || 0
		};
	}
}

exports.IssuePkcs12CertificateRequest = IssuePkcs12CertificateRequest;