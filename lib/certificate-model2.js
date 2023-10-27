'use strict';

class CertificateModel2 {
	constructor({parameters, info, content, hasSignedAgreement, id, subscriptionId, caId, keyId,
		dateIssued, dateEffective, dateExpires, dateRevoked, alias, subjectDisplayName, serialNumber,
		isCA, kind, format, isPendingApproval} = {}) { 
		this._parameters = parameters || null;
		this._info = info || null;
		this._content = content || null;
		this._hasSignedAgreement = hasSignedAgreement || null;
		this._id = id || null;
		this._subscriptionId = subscriptionId || null;
		this._caId = caId || null;
		this._keyId = keyId || null;
		this._dateIssued = dateIssued || null;
		this._dateEffective = dateEffective || null;
		this._dateExpires = dateExpires || null;
		this._dateRevoked = dateRevoked || null;
		this._alias = alias || null;
		this._subjectDisplayName = subjectDisplayName || null;
		this._serialNumber = serialNumber || null;
		this._isCA = isCA || null;
		this._kind = kind || null;
		this._format = format || null;
		this._isPendingApproval = isPendingApproval || null;
	}


	/**
     * @return {Object}
     */
	getParameters() {
		return this._parameters;
	}

	/**
     * @param {Object} parameters
     */
	setParameters(parameters) {
		this._parameters = parameters;
	}
	/**
     * @return {module:dist/amplia-client/CertificateInfo2}
     */
	getInfo() {
		return this._info;
	}

	/**
     * @param {module:dist/amplia-client/CertificateInfo2} info
     */
	setInfo(info) {
		this._info = info;
	}
	/**
     * @return {Blob}
     */
	getContent() {
		return this._content;
	}

	/**
     * @param {Blob} content
     */
	setContent(content) {
		this._content = content;
	}
	/**
     * @return {Boolean}
     */
	getHasSignedAgreement() {
		return this._hasSignedAgreement;
	}

	/**
     * @param {Boolean} hasSignedAgreement
     */
	setHasSignedAgreement(hasSignedAgreement) {
		this._hasSignedAgreement = hasSignedAgreement;
	}
	/**
     * @return {String}
     */
	getId() {
		return this._id;
	}

	/**
     * @param {String} id
     */
	setId(id) {
		this._id = id;
	}
	/**
     * @return {String}
     */
	getSubscriptionId() {
		return this._subscriptionId;
	}

	/**
     * @param {String} subscriptionId
     */
	setSubscriptionId(subscriptionId) {
		this._subscriptionId = subscriptionId;
	}
	/**
     * @return {String}
     */
	getCaId() {
		return this._caId;
	}

	/**
     * @param {String} caId
     */
	setCaId(caId) {
		this._caId = caId;
	}
	/**
     * @return {String}
     */
	getKeyId() {
		return this._keyId;
	}

	/**
     * @param {String} keyId
     */
	setKeyId(keyId) {
		this._keyId = keyId;
	}
	/**
     * @return {Date}
     */
	getDateIssued() {
		return this._dateIssued;
	}

	/**
     * @param {Date} dateIssued
     */
	setDateIssued(dateIssued) {
		this._dateIssued = dateIssued;
	}
	/**
     * @return {Date}
     */
	getDateEffective() {
		return this._dateEffective;
	}

	/**
     * @param {Date} dateEffective
     */
	setDateEffective(dateEffective) {
		this._dateEffective = dateEffective;
	}
	/**
     * @return {Date}
     */
	getDateExpires() {
		return this._dateExpires;
	}

	/**
     * @param {Date} dateExpires
     */
	setDateExpires(dateExpires) {
		this._dateExpires = dateExpires;
	}
	/**
     * @return {Date}
     */
	getDateRevoked() {
		return this._dateRevoked;
	}

	/**
     * @param {Date} dateRevoked
     */
	setDateRevoked(dateRevoked) {
		this._dateRevoked = dateRevoked;
	}
	/**
     * @return {String}
     */
	getAlias() {
		return this._alias;
	}

	/**
     * @param {String} alias
     */
	setAlias(alias) {
		this._alias = alias;
	}
	/**
     * @return {String}
     */
	getSubjectDisplayName() {
		return this._subjectDisplayName;
	}

	/**
     * @param {String} subjectDisplayName
     */
	setSubjectDisplayName(subjectDisplayName) {
		this._subjectDisplayName = subjectDisplayName;
	}
	/**
     * @return {String}
     */
	getSerialNumber() {
		return this._serialNumber;
	}

	/**
     * @param {String} serialNumber
     */
	setSerialNumber(serialNumber) {
		this._serialNumber = serialNumber;
	}
	/**
     * @return {Boolean}
     */
	getIsCA() {
		return this._isCA;
	}

	/**
     * @param {Boolean} isCA
     */
	setIsCA(isCA) {
		this._isCA = isCA;
	}
	/**
     * @return {module:dist/amplia-client/CertificateKinds}
     */
	getKind() {
		return this._kind;
	}

	/**
     * @param {module:dist/amplia-client/CertificateKinds} kind
     */
	setKind(kind) {
		this._kind = kind;
	}
	/**
     * @return {module:dist/amplia-client/CertificateFormats}
     */
	getFormat() {
		return this._format;
	}

	/**
     * @param {module:dist/amplia-client/CertificateFormats} format
     */
	setFormat(format) {
		this._format = format;
	}
	/**
     * @return {Boolean}
     */
	getIsPendingApproval() {
		return this._isPendingApproval;
	}

	/**
     * @param {Boolean} isPendingApproval
     */
	setIsPendingApproval(isPendingApproval) {
		this._isPendingApproval = isPendingApproval;
	}

	toModel() {
		return {
			parameters: this._parameters, 
			info: this._info, 
			content: this._content, 
			hasSignedAgreement: this._hasSignedAgreement, 
			id: this._id, 
			subscriptionId: this._subscriptionId, 
			caId: this._caId, 
			keyId: this._keyId,
			dateIssued: this._dateIssued, 
			dateEffective: this._dateEffective, 
			dateExpires: this._dateExpires, 
			dateRevoked: this._dateRevoked, 
			alias: this._alias, 
			subjectDisplayName: this._subjectDisplayName, 
			serialNumber: this._serialNumber,
			isCA: this._isCA, 
			kind: this._kind, 
			format: this._format, 
			isPendingApproval: this._isPendingApproval
		};
	}
}

exports.CertificateModel2 = CertificateModel2;

