class PinResult {
  constructor({success, status} = {}) {
    this._success = success || null;
    this._status = status || null;
  }
  
  get success() {
    return this._success;
  }

  set success(value) {
    this._success = value;
  }

  getSuccess() {
    return this._success;
  }

  setSuccess(value) {
    this._success = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  getStatus() {
    return this._status;
  }

  setStatus(value) {
    this._status = value;
  }
}

exports.PinResult = PinResult;
