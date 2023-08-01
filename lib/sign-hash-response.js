const { toModel } = require("./model-transform");

class SignHashResponse {
  constructor({pinResult, signature} = {}) {
    this._pinResult = pinResult || null;
    this._signature = signature || null;
  }

  // Get and set accessors as functions
  getPinResult() {
    return this._pinResult;
  }

  setPinResult(value) {
    this._pinResult = value;
  }

  getSignature() {
    return this._signature;
  }

  setSignature(value) {
    this._signature = value;
  }

  // Traditional getter and setter accessors
  get pinResult() {
    return this._pinResult;
  }

  set pinResult(value) {
    this._pinResult = value;
  }

  get signature() {
    return this._signature;
  }

  set signature(value) {
    this._signature = value;
  }

  toModel(){
    return toModel(this);
  }

}

exports.SignHashResponse = SignHashResponse;