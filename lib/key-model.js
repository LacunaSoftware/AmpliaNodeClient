const { KeyTypes, DigestAlgorithms } = require("./enums");
const { toModel } = require("./model-transform");

class KeyModel {
    constructor({
        canDelete,
        rsaPublicParameters,
        csr,
        csrInfo,
        size,
        keyType,
        curve,
        recommendedDigestAlgorithm,
        keyStore,
        keyStorePartitionName,
        id,
        subscriptionId,
        name,
        associatedCAId,
        isPinProtected} = {}) {
        this._canDelete = canDelete || null;
        this._rsaPublicParameters = rsaPublicParameters || null;
        this._csr = csr || null;
        this._csrInfo = csrInfo || null;
        this._size = size || null;
        this._keyType = keyType || null;
        this._curve = curve || null;
        this._recommendedDigestAlgorithm = recommendedDigestAlgorithm || null;
        this._keyStore = keyStore || null;
        this._keyStorePartitionName = keyStorePartitionName || null;
        this._id = id || null;
        this._subscriptionId = subscriptionId || null;
        this._name = name || null;
        this._associatedCAId = associatedCAId || null;
        this.isPinProtected = isPinProtected || null;
    }

    // region canDelete member
    get canDelete() {
        return this._canDelete;
    }

    set canDelete(value) {
        this._canDelete = value;
    }
    getCanDelete() {
        return this._canDelete;
    }

    setCanDelete(value) {
        this._canDelete = value;
    }
    //endregion

    // region rsaPublicParameters member
    get rsaPublicParameters() {
        return this._rsaPublicParameters;
    }

    set rsaPublicParameters(value) {
        this._rsaPublicParameters = value;
    }

    getRsaPublicParameters() {
        return this._rsaPublicParameters;
    }

    setRsaPublicParameters(value) {
        this._rsaPublicParameters = value;
    }

    // region csr member
    get csr() {
        return this._csr;
    }

    set csr(value) {
        this._csr = value;
    }

    getCsr() {
        return this._csr;
    }

    setCsr(value) {
        this._csr = value;
    }
    //endregion

    // region csrInfo member
    get csrInfo() {
        return this._csrInfo;
    }

    set csrInfo(value) {
        this._csrInfo = value;
    }

    getCsrInfo() {
        return this._csrInfo;
    }

    setCsrInfo(value) {
        this._csrInfo = value;
    }
    //endregion

    // region size member
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
    //endregion

    // region keyType member
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
    // endregion

    // region curve member
    get curve() {
        return this._curve;
    }

    set curve(value) {
        this._curve = value;
    }

    getCurve() {
        return this._curve;
    }

    setCurve(value) {
        this._curve = value;
    }
    // endregion

    // region recommendedDigestAlgorithm member
    get recommendedDigestAlgorithm() {
        return this._recommendedDigestAlgorithm;
    }

    set recommendedDigestAlgorithm(value) {
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
    
    getRecommendedDigestAlgorithm() {
        return this._recommendedDigestAlgorithm;
    }
    
    setRecommendedDigestAlgorithm(value) {
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
    // endregion
    
    // region keyStore member
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
    // endregion

    // region keyStorePartition member
    get keyStorePartitionName() {
        return this._keyStorePartitionName;
    }

    set keyStorePartitionName(value) {
        this._keyStorePartitionName = value;
    }

    getKeyStorePartitionName() {
        return this._keyStorePartitionName;
    }

    setKeyStorePartitionName(value) {
        this._keyStorePartitionName = value;
    }
    // endregion

    // region id member

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    getId() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    // endregion

    // region subscriptionId member
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
    // endregion

    // region name member
    get name() {
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
    // endregion

    // region associatedCAId member
    get associatedCAId() {
        return this._associatedCAId;
    }

    set associatedCAId(value) {
        this._associatedCAId = value;
    }

    getAssociatedCAId() {
        return this._associatedCAId;
    }

    setAssociatedCAId(value) {
        this._associatedCAId = value;
    }
    // endregion

    // region isPinProtected member
    get isPinProtected() {
        return this._isPinProtected;
    }

    set isPinProtected(value) {
        this._isPinProtected = value;
    }

    getIsPinProtected() {
        return this._isPinProtected;
    }

    setIsPinProtected(value) {
        this._isPinProtected = value;
    }
    // endregion
}

exports.KeyModel = KeyModel;
