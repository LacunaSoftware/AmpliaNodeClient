class RSAPublicParametersModel {
  constructor({modulus, exponent} = {}) {
    this._modulus = modulus || null;
    this._exponent = exponent || null;
  }

  // Region modulus member
  get modulus() {
    return this._modulus;
  }

  set modulus(value) {
    this._modulus = value;
  }

  getModulus() {
    return this._modulus;
  }

  setModulus(value) {
    this._modulus = value;
  }
  //endregion

  // Region exponent member
  get exponent() {
    return this._exponent;
  }

  set exponent(value) {
    this._exponent = value;
  }

  getExponent() {
    return this._exponent;
  }

  setExponent(value) {
    this._exponent = value;
  }
  //endregion
}

exports.RSAPublicParametersModel = RSAPublicParametersModel;
