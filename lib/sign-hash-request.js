const { DigestAlgorithms, AmpliaErrorCodes } = require('./enums');
const { toModel } = require('./model-transform');

class SignHashRequest {
	constructor({hash, digestAlgorithm, pin} = {}){
		this._hash = hash || null;
		this._digestAlgorithm = digestAlgorithm || null;
		this._pin = pin || null;
	}

	// region hash member
	get hash() {
		return this._hash;
	}
	set hash(value) {
		this._hash = value;
	}

	getHash() {
		return this._hash;
	}
	setHash(value) {
		this._hash = value;
	}
	//endregion

	// region digestAlgorithm member
	get digestAlgorithm() {
		return this._digestAlgorithm;
	}
	set digestAlgorithm(value) {
		switch (value) {
		case DigestAlgorithms.SHA1:
			this._recommendedDigestAlgorithm = value;
			break;
		case DigestAlgorithms.SHA256:
			this._recommendedDigestAlgorithm = value;
			break;
		case DigestAlgorithms.SHA384:
			this._recommendedDigestAlgorithm = value;
			break;
		case DigestAlgorithms.SHA512:
			this._recommendedDigestAlgorithm = value;
			break;
		default:
			throw new Error(AmpliaErrorCodes.DIGEST_ALGORITHM_NOT_SUPPORTED);
		}
	}

	getDigestAlgorithm() {
		return this._digestAlgorithm;
	}

	setDigestAlgorithm(value) {
		switch (value) {
		case DigestAlgorithms.SHA1:
			this._recommendedDigestAlgorithm = value;
			break;
		case DigestAlgorithms.SHA256:
			this._recommendedDigestAlgorithm = value;
			break;
		case DigestAlgorithms.SHA384:
			this._recommendedDigestAlgorithm = value;
			break;
		case DigestAlgorithms.SHA512:
			this._recommendedDigestAlgorithm = value;
			break;
		default:
			throw new Error(AmpliaErrorCodes.DIGEST_ALGORITHM_NOT_SUPPORTED);
		}
	}
	//endregion

	// region pin member
	get pin() {
		return this._pin;
	}
	set pin(value) {
		this._pin = value;
	}

	getPin() {
		return this._pin;
	}
	setPin(value) {
		this._pin = value;
	}
	//endregion

	toModel(){
		return toModel(this);
	}

}

exports.SignHashRequest = SignHashRequest;
