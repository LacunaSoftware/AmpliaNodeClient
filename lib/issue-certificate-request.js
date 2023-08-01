'use strict';

class IssueCertificateRequest {

	constructor({ orderId, csr, keyMedia, keyId } = {}) {
		this._orderId = orderId || null;
		this._csr = csr || null;
		this._keyMedia = keyMedia || null;
		this._keyId = keyId || null;
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

	//region "csr" Accessors

	getCsr() {
		return this._csr;
	}

	get csr() {
		return this._csr;
	}

	setCsr(value) {
		this._csr = value;
	}

	set csr(value) {
		this._csr = value;
	}

	//endregion

	//region "keyMedia" Accessors
	
	getKeyMedia() {
		return this._keyMedia;
	}

	get keyMedia() {
		return this._keyMedia;
	}
	
	setKeyMedia(value) {
		this._keyMedia = value;
	}
	
	set keyMedia(value) {
		this._keyMedia = value;
	}
	
	//endregion
	
	//region "keyId" Accessors
	
	getKeyId() {
		return this._keyId;
	}
	
	get keyId() {
		return this._keyId;
	}
	
	setKeyId(value) {
		this._keyId = value;
	}
	
	set keyId(value) {
		this._keyId = value;
	}
	//endregion
	
	toModel() {
		return {
			orderId: this._orderId || '00000000-0000-0000-0000-000000000000',
			csr: this._csr,
			keyMedia: this._keyMedia,
			keyId: this._keyId
		};
	}
}

exports.IssueCertificateRequest = IssueCertificateRequest;