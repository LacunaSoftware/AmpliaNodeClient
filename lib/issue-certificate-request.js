'use strict';

class IssueCertificateRequest {

	constructor({ orderId, csr, keyMedia } = {}) {
		this._orderId = orderId || null;
		this._csr = csr || null;
		this._keyMedia = keyMedia || null;
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

	toModel() {
		return {
			orderId: this._orderId || '00000000-0000-0000-0000-000000000000',
			csr: this._csr,
			keyMedia: this._keyMedia,
		};
	}
}

exports.IssueCertificateRequest = IssueCertificateRequest;