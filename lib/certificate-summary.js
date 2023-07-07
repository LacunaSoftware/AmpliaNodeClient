'use strict';

const { CertificateKinds, AmpliaErrorCodes, CertificateFormats } = require("./enums");

class CertificateSummary {

	constructor(
		{
			id,
			subscriptionId,
			caId,
			keyId,
			dateIssued,
			dateExpires,
			dateRevoked,
			alias,
			subjectDisplayName,
			serialNumber,
			isCA,
			kind,
			format,
            isPendingApproval
		} = {}
	) {
		this._id = id || null;
		this._subscriptionId = subscriptionId || null;
		this._caId = caId || null;
		this._keyId = keyId || null;
		this._dateIssued = dateIssued || null;
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

	//region "id" Accessors

	getId() {
		return this._id;
	}

	get id() {
		return this._id;
	}

	setId(value) {
		this._id = value;
	}

	set id(value) {
		this._id = value;
	}

	//endregion

	//region "subscriptionId" Accessors

	getSubscriptionId() {
		return this._subscriptionId;
	}

	get subscriptionId() {
		return this._subscriptionId;
	}

	setSubscriptionId(value) {
		this._subscriptionId = value;
	}

	set subscriptionId(value) {
		this._subscriptionId = value;
	}

	//endregion

	//region "caId" Accessors

	getCAId() {
		return this._caId;
	}

	get caId() {
		return this._caId;
	}

	setCAId(value) {
		this._caId = value;
	}

	set caId(value) {
		this._caId = value;
	}

	//endregion

	//region "keyId" Accessors

	getKeyId() {
		return this._keyId;
	}

	get keyId() {
		return this._keyId;
	}

	setKeyId(value) {
		this._keyId = value;
	}

	set keyId(value) {
		this._keyId = value;
	}

	//endregion

	//region "dateIssued" Accessors

	getDateIssued() {
		return this._dateIssued;
	}

	get dateIssued() {
		return this._dateIssued;
	}

	setDateIssued(value) {
		this._dateIssued = value;
	}

	set dateIssued(value) {
		this._dateIssued = value;
	}

	//endregion

	//region "dateExpires" Accessors

	getDateExpires() {
		return this._dateExpires;
	}

	get dateExpires() {
		return this._dateExpires;
	}

	setDateExpires(value) {
		this._dateExpires = value;
	}

	set dateExpires(value) {
		this._dateExpires = value;
	}

	//endregion

	//region "dateRevoked" Accessors

	getDateRevoked() {
		return this._dateRevoked;
	}

	get dateRevoked() {
		return this._dateRevoked;
	}

	setDateRevoked(value) {
		this._dateRevoked = value;
	}

	set dateRevoked(value) {
		this._dateRevoked = value;
	}

	//endregion

	//region "alias" Accessors

	getAlias() {
		return this._alias;
	}

	get alias() {
		return this._alias;
	}

	setAlias(value) {
		this._alias = value;
	}

	set alias(value) {
		this._alias = value;
	}

	//endregion

	//region "subjectDisplayName" Accessors

	getSubjectDisplayName() {
		return this._subjectDisplayName;
	}

	get subjectDisplayName() {
		return this._subjectDisplayName;
	}

	setSubjectDisplayName(value) {
		this._subjectDisplayName = value;
	}

	set subjectDisplayName(value) {
		this._subjectDisplayName = value;
	}

	//endregion

	//region "serialNumber" Accessors

	getSerialNumber() {
		return this._serialNumber;
	}

	get serialNumber() {
		return this._serialNumber;
	}

	setSerialNumber(value) {
		this._serialNumber = value;
	}

	set serialNumber(value) {
		this._serialNumber = value;
	}

	//endregion

	//region "isCA" Accessors

	getIsCA() {
		return this._isCA;
	}

	get isCA() {
		return this._isCA;
	}

	setIsCA(value) {
		this._isCA = value;
	}

	set isCA(value) {
		this._isCA = value;
	}

	//endregion

	//region "kind" Accessors

	getKind() {
		return this._kind;
	}

	get kind() {
		return this._kind;
	}

	setKind(value) {
		switch (value) {
			case CertificateKinds.ATTRIBUTE:
				this._kind = value
				break;
			case CertificateKinds.ATTRIBUTE:
				this._kind = value
				break;
			default:
				throw new Error(AmpliaErrorCodes.CERTIFICATE_KIND_NOT_SUPPORTED);
		}
	}

	set kind(value) {
		switch (value) {
			case CertificateKinds.ATTRIBUTE:
				this._kind = value
				break;
			case CertificateKinds.ATTRIBUTE:
				this._kind = value
				break;
			default:
				throw new Error(AmpliaErrorCodes.CERTIFICATE_KIND_NOT_SUPPORTED);
		}
	}

	//endregion

	//region "format" Accessors

	getFormat() {
		return this._format;
	}

	get format() {
		return this._format;
	}

	setFormat(value) {
		switch (value) {
			case CertificateFormats.PKI_BRAZIL:
				this._format = value;
				break;
			case CertificateFormats.SSL:
				this._format = value;
				break;
			case CertificateFormats.CNB:
				this._format = value;
				break;
			case CertificateFormats.CNB_CA:
				this._format = value;
				break;
			case CertificateFormats.CIE:
				this._format = value;
				break;
			case CertificateFormats.ARISP:
				this._format = value;
				break;
			case CertificateFormats.CUSTOM:
				this._format = value;
				break;
			case CertificateFormats.PRIVATE_ID:
				this._format = value;
				break;
			case CertificateFormats.ECUADOR_BCE:
				this._format = value;
				break;
			case CertificateFormats.LATINUS:
				this._format = value;
				break;
			case CertificateFormats.BR_LABORAL:
				this._format = value;
				break;
			case CertificateFormats.PKI_CABO_VERDE:
				this._format = value;
				break;
			default:
				break;
		}
	}

	set format(value) {
		switch (value) {
			case CertificateFormats.PKI_BRAZIL:
				this._format = value;
				break;
			case CertificateFormats.SSL:
				this._format = value;
				break;
			case CertificateFormats.CNB:
				this._format = value;
				break;
			case CertificateFormats.CNB_CA:
				this._format = value;
				break;
			case CertificateFormats.CIE:
				this._format = value;
				break;
			case CertificateFormats.ARISP:
				this._format = value;
				break;
			case CertificateFormats.CUSTOM:
				this._format = value;
				break;
			case CertificateFormats.PRIVATE_ID:
				this._format = value;
				break;
			case CertificateFormats.ECUADOR_BCE:
				this._format = value;
				break;
			case CertificateFormats.LATINUS:
				this._format = value;
				break;
			case CertificateFormats.BR_LABORAL:
				this._format = value;
				break;
			case CertificateFormats.PKI_CABO_VERDE:
				this._format = value;
				break;
			default:
				break;
		}
	}

	//endregion

    //region "isPendingApproval" Accessors

	getIsPendingApproval() {
		return this._isPendingApproval;
	}

	get isPendingApproval() {
		return this._isPendingApproval;
	}

	setIsPendingApproval(value) {
		this._isPendingApproval = value;
	}

	set isPendingApproval(value) {
		this._isPendingApproval = value;
	}

	//endregion
}

exports.CertificateSummary = CertificateSummary;