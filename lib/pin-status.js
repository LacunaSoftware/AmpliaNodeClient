class PinStatus {
    constructor({finalTry, countLow} = {}) {
        this._finalTry = finalTry || null;
        this._countLow = countLow || null;
    }

    // region FinalTry member
    get finalTry() {
        return this._finalTry;
    }
    
    set finalTry(value) {
        this._finalTry = value;
    }

    getFinalTry() {
        return this._finalTry;
    }
    
    setFinalTry(value) {
        this._finalTry = value;
    }
    //endregion
    
    
    // region countLow member
    get countLow() {
        return this._countLow;
    }
    
    set countLow(value) {
        this._countLow = value;
    }
    
    getCountLow() {
        return this._countLow;
    }
    
    setCountLow(value) {
        this._countLow = value;
    }
    //endregion
}

exports.PinStatus = PinStatus;