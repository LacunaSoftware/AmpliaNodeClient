const { KeyTypes } = require('./enums');

class KeyModel {
  constructor() {
    this.canDelete = null;
    this.rsaPublicParameters = null;
    this.csr = null;
    this.csrInfo = null;
    this.size = null;
    this.keyType = null;
    this.curve = null;
    this.recommendedDigestAlgorithm = null;
    this.keyStore = null;
    this.keyStorePartitionName = null;
    this.id = null;
    this.subscriptionId = null;
    this.name = null;
    this.associatedCAId = null;
    this.isPinProtected = null;
  }

  get canDelete() {
    return this._canDelete;
  }

  set canDelete(value) {
    this._canDelete = value;
  }

  get rsaPublicParameters() {
    return this._rsaPublicParameters;
  }

  set rsaPublicParameters(value) {
    this._rsaPublicParameters = value;
  }

  get csr() {
    return this._csr;
  }

  set csr(value) {
    this._csr = value;
  }

  get csrInfo() {
    return this._csrInfo;
  }

  set csrInfo(value) {
    this._csrInfo = value
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get keyType() {
    return this._keyType;
  }

  set keyType(value) {
    switch (value) {
        case KeyTypes.RSA:
            this._keyType = value;
            break;
        case KeyTypes.EC:
            this._keyType = value;
            break;
        default:
            break;
    }
    this._keyType = value;
  }

  get curve() {
    return this._curve;
  }

  set curve(value) {
    this._curve = value;
  }

  get recommendedDigestAlgorithm() {
    return this._recommendedDigestAlgorithm;
  }

  set recommendedDigestAlgorithm(value) {
    this._recommendedDigestAlgorithm = value;
  }

  get keyStore() {
    return this._keyStore;
  }

  set keyStore(value) {
    this._keyStore = value;
  }

  get keyStorePartitionName() {
    return this._keyStorePartitionName;
  }

  set keyStorePartitionName(value) {
    this._keyStorePartitionName = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get subscriptionId() {
    return this._subscriptionId;
  }

  set subscriptionId(value) {
    this._subscriptionId = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get associatedCAId() {
    return this._associatedCAId;
  }

  set associatedCAId(value) {
    this._associatedCAId = value;
  }

  get isPinProtected() {
    return this._isPinProtected;
  }

  set isPinProtected(value) {
    this._isPinProtected = value;
  }
}
