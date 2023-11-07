'use strict';

class IssueSoftwareCertificateRequest{

	constructor({ orderId, password, keySize } = {}) {
		this._orderId = orderId || null;
		this._password = password || null;
		this._keySize = keySize || null;
	}

	//region "orderId" Accessors


	get orderId() {
		return this._orderId;
	}


	set orderId(value) {
		this._orderId = value;
	}

	//endregion

	//region "password" Accessors


	get password() {
		return this._password;
	}


	set password(value) {
		this._password = value;
	}

	//endregion

	//region "keySize" Accessors
	

	get keySize() {
		return this._keySize;
	}
	
	
	set keySize(value) {
		this._keySize = value;
	}
	
	//endregion
	
	toModel() {
		return {
			orderId: this._orderId || '00000000-0000-0000-0000-000000000000',
			password: this._password,
			keySize: this._keySize || 2048
		};
	}	
}
exports.IssueSoftwareCertificateRequest = IssueSoftwareCertificateRequest;