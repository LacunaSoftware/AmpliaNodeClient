const { AmpliaErrorCodes } = require("./enums");
const { toModel } = require("./model-transform");
class CsrInfo {
    constructor({digestAlgorithm, subject} = {}){
        this._digestAlgorithm = digestAlgorithm || null;
        this._subject = subject || null;
    }
    
    //Region digestAlgorithm member
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
        return this._digestAlgorithm
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
    
    //Region subject member
    get subject() {
        return this._subject
    }
    set subject(value) {
        this._subject = value
    }
    getSubject() {
        return this._subject
    }
    setSubject(value) {
        this._subject = value
    }
    //endregion

    toModel() {
        return toModel(this);
    }

    
}

exports.CsrInfo = CsrInfo;