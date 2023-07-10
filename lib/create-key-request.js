"use strict"
const {KeyTypes} = require('./enums');
const { toModel } = require('./model-transform');
class CreateKeyRequest {
    
    constructor({keyType, name, size, keyStore, subscriptionId} = {}) {
        this._keyType = keyType || null;
        this._name = name || null;
        this._size = size || null;
        this._keyStore = keyStore || null;
        this._subscriptionId = subscriptionId || null;
    }

    // Region keyType member
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
                throw new Error(AmpliaErrorCodes.KEY_TYPE_NOT_SUPPORTED);
        }
    }

    getKeyType() {
        return this._keyType;
    }
    setKeyType(value) {
        switch (value) {
            case KeyTypes.RSA:
                this._keyType = value;
                break;
            case KeyTypes.EC:
                this._keyType = value;
                break;
            default:
                throw new Error(AmpliaErrorCodes.KEY_TYPE_NOT_SUPPORTED);
        }
    }
    //endRegion
    
    // Region name member
    get name () {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
    
    getName() {
        return this._name;
    }
    
    setName(value) {
        this._name = value;
    }
    //endRegion

    // Region size member
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    getSize() {
        return this._size;
    }
    setSize(value) {
        this._size = value;
    }
    //endRegion
    
    // Region subscriptionId
    get subscriptionId() {
        return this._subscriptionId;
    }
    set subscriptionId(value) {
        this._subscriptionId = value;
    }
    getSubscriptionId() {
        return this._subscriptionId;
    }
    setSubscriptionId(value) {
        this._subscriptionId = value;
    }
    //endRegion
    
    // Region keystore member
    get keyStore() {
        return this._keyStore;
    }
    set keyStore(value) {
        this._keyStore = value;
    }
    getKeyStore() {
        return this._keyStore;
    }
    setKeyStore(value) {
        this._keyStore = value;
    }
    //endRegion
    
    // toModelRegion
    
    toModel(){
        toModel();
    }
        
}


exports.CreateKeyRequest = CreateKeyRequest;