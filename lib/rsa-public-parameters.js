class RSAPublicParametersModel {
  constructor() {
    this._modulus = '';
    this._exponent = '';
  }

  get modulus() {
    return this._modulus;
  }

  set modulus(value) {
    this._modulus = value;
  }

  get exponent() {
    return this._exponent;
  }

  set exponent(value) {
    this._exponent = value;
  }
}
