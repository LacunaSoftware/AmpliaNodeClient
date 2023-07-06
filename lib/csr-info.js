class CsrInfo {
    constructor(digestAlgorithm, subject){
        this._digestAlgorithm = digestAlgorithm
        this._subject = subject
    }
    
    get digestAlgorithm() {
        return this._digestAlgorithm
    }
    set digestAlgorithm(value) {
        this._digestAlgorithm = value
    }

    get subject() {
        return this._subject
    }
    set subject(value) {
        this._subject = value
    }
}