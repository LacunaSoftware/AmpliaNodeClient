'use strict';
const { CertificateKinds, CertificateFormats } = require('./enums');
const { CertificateParameters } = require('./certificate-parameters');

class BaseCertificate {

	constructor(
		{
			id,
			caId,
			alias,
			info: {
				subjectName,
				emailAddress,
				issuerName,
				validityStart,
				validityEnd,
				crlDistributionPoints,
				ocspUris
			},
			serialNumber,
			content,
			kind,
			format
		} = {}
	) {
		this._id = id || null;
		this._caId = caId || null;
		this._subjectName = null;
		this._alias = alias || null;
		this._emailAddress = emailAddress || null;
		this._issuerName = null;
		this._serialNumber = serialNumber || null;
		this._validityStart = validityStart || null;
		this._validityEnd = validityEnd || null;
		this._crlDistributionPoints = crlDistributionPoints || null;
		this._ocspUris = ocspUris || null;
		this._content = content || null;
		this._kind = kind || null;
		this._format = format || null;

		if (subjectName) {
			this._subjectName = new Name(subjectName);
		}

		if (issuerName) {
			this._issuerName = new Name(issuerName);
		}
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

	//region "subjectName" Accessors

	getSubjectName() {
		return this._subjectName;
	}

	get subjectName() {
		return this._subjectName;
	}

	setSubjectName(value) {
		this._subjectName = value;
	}

	set subjectName(value) {
		this._subjectName = value;
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

	//region "emailAddress" Accessors

	getEmailAddress() {
		return this._emailAddress;
	}

	get emailAddress() {
		return this._emailAddress;
	}

	setEmailAddress(value) {
		this._emailAddress = value;
	}

	set emailAddress(value) {
		this._emailAddress = value;
	}

	//endregion

	//region "issuerName" Accessors

	getIssuerName() {
		return this._issuerName;
	}

	get issuerName() {
		return this._issuerName;
	}

	setIssuerName(value) {
		this._issuerName = value;
	}

	set issuerName(value) {
		this._issuerName = value;
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

	//region "validityStart" Accessors

	getValidityStart() {
		return this._validityStart;
	}

	get validityStart() {
		return this._validityStart;
	}

	setValidityStart(value) {
		this._validityStart = value;
	}

	set validityStart(value) {
		this._validityStart = value;
	}

	//endregion

	//region "validityEnd" Accessors

	getValidityEnd() {
		return this._validityEnd;
	}

	get validityEnd() {
		return this._validityEnd;
	}

	setValidityEnd(value) {
		this._validityEnd = value;
	}

	set validityEnd(value) {
		this._validityEnd = value;
	}

	//endregion

	//region "crlDistributionPoints" Accessors

	getCrlDistributionPoints() {
		return this._crlDistributionPoints;
	}

	get crlDistributionPoints() {
		return this._crlDistributionPoints;
	}

	setCrlDistributionPoints(value) {
		this._crlDistributionPoints = value;
	}

	set crlDistributionPoints(value) {
		this._crlDistributionPoints = value;
	}

	//endregion

	//region "ocspUris" Accessors

	getOcspUris() {
		return this._ocspUris;
	}

	get ocspUris() {
		return this._ocspUris;
	}

	setOcspUris(value) {
		this._ocspUris = value;
	}

	set ocspUris(value) {
		this._ocspUris = value;
	}

	//endregion

	//region "content" Accessors

	getContent() {
		return this._content;
	}

	get content() {
		return this._content;
	}

	setContent(value) {
		this._content = value;
	}

	set content(value) {
		this._content = value;
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
		this._kind = value;
	}

	set kind(value) {
		this._kind = value;
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
		this._format = value;
	}

	set format(value) {
		this._format = value;
	}

	//endregion

	toModel() {

		if (this._subjectName && !(this._subjectName instanceof Name)) {
			throw new Error(`Unsupported type for "subjectName" field on model for BaseCertificate: ${typeof(this._subjectName)}`);
		}

		if (this._issuerName && !(this._issuerName instanceof Name)) {
			throw new Error(`Unsupported type for "issuerName" field on model for BaseCertificate: ${typeof(this._issuerName)}`);
		}

		if (this._kind) {
			switch (this._kind) {
				case CertificateKinds.PUBLIC_KEY:
				case CertificateKinds.ATTRIBUTE:
					break;
				default:
					throw new Error(`Unsupported "kind" field on model for BaseCertificate: ${this._kind}`);
			}
		}

		if (this._format) {
			switch (this._format) {
				case CertificateFormats.PKI_BRAZIL:
				case CertificateFormats.SSL:
				case CertificateFormats.CNB:
				case CertificateFormats.CIE:
				case CertificateFormats.ARISP:
					break;
				default:
					throw new Error(`Unsupported "format" field on model for BaseCertificate: ${this._format}`);
			}
		}

		return {
			id: this._id,
			caId: this._caId,
			alias: this._alias,
			subjectName: this._subjectName ? this._subjectName.toModel() : null,
			emailAddress: this._emailAddress,
			issuerName: this._issuerName ? this._issuerName.toModel() : null,
			serialNumber: this._serialNumber,
			validityStart: this._validityStart,
			validityEnd: this._validityEnd,
			crlDistributionPoints: this._crlDistributionPoints,
			ocspUris: this._ocspUris,
			content: this._content,
			kind: this._kind,
			format: this._format
		};
	}
}

class Certificate extends BaseCertificate {

	constructor({ parameters, ...model }) {
		super(model);
		this._parameters = null;

		if (parameters) {
			this._parameters = CertificateParameters.decode(parameters);
		}
	}

	//region "parameters" Accessors

	getParameters() {
		return this._parameters;
	}

	get parameters() {
		return this._parameters;
	}

	setParameters(value) {
		this._parameters = value;
	}

	set parameters(value) {
		this._parameters = value;
	}

	//endregion

	toModel() {
		if (this._parameters && !(this._parameters instanceof CertificateParameters)) {
			throw new Error(`Unsupported type for "parameters" on model for Certificate: ${typeof(this._parameters)}`);
		}

		let model = super.toModel();
		model['parameters'] = this._parameters ? this._parameters.toModel() : null;
		return model;
	}
}

class Name {

	constructor(
		{
			country,
			organization,
			organizationUnit,
			dnQualifier,
			stateName,
			commonName,
			serialNumber,
			locality,
			title,
			surname,
			givenName,
			initials,
			pseudonym,
			generationQualifier,
			emailAddress
		} = {}
	) {
		this._country = country || null;
		this._organization = organization || null;
		this._organizationUnit = organizationUnit || null;
		this._dnQualifier = dnQualifier || null;
		this._stateName = stateName || null;
		this._commonName = commonName || null;
		this._serialNumber = serialNumber || null;
		this._locality = locality || null;
		this._title = title || null;
		this._surname = surname || null;
		this._givenName = givenName || null;
		this._initials = initials || null;
		this._pseudonym = pseudonym || null;
		this._generationQualifier = generationQualifier || null;
		this._emailAddress = emailAddress || null;
	}

	//region "country" Accessors

	getCountry() {
		return this._country;
	}

	get country() {
		return this._country;
	}

	setCountry(value) {
		this._country = value;
	}

	set country(value) {
		this._country = value;
	}

	//endregion

	//region "organization" Accessors

	getOrganization() {
		return this._organization;
	}

	get organization() {
		return this._organization;
	}

	setOrganization(value) {
		this._organization = value;
	}

	set organization(value) {
		this._organization = value;
	}

	//endregion

	//region "organizationUnit" Accessors

	getOrganizationUnit() {
		return this._organizationUnit;
	}

	get organizationUnit() {
		return this._organizationUnit;
	}

	setOrganizationUnit(value) {
		this._organizationUnit = value;
	}

	set organizationUnit(value) {
		this._organizationUnit = value;
	}

	//endregion

	//region "dnQualifier" Accessors

	getDNQualifier() {
		return this._dnQualifier;
	}

	get dnQualifier() {
		return this._dnQualifier;
	}

	setDNQualifier(value) {
		this._dnQualifier = value;
	}

	set dnQualifier(value) {
		this._dnQualifier = value;
	}

	//endregion

	//region "stateName" Accessors

	getStateName() {
		return this._stateName;
	}

	get stateName() {
		return this._stateName;
	}

	setStateName(value) {
		this._stateName = value;
	}

	set stateName(value) {
		this._stateName = value;
	}

	//endregion

	//region "commonName" Accessors

	getCommonName() {
		return this._commonName;
	}

	get commonName() {
		return this._commonName;
	}

	setCommonName(value) {
		this._commonName = value;
	}

	set commonName(value) {
		this._commonName = value;
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

	//region "locality" Accessors

	getLocality() {
		return this._locality;
	}

	get locality() {
		return this._locality;
	}

	setLocality(value) {
		this._locality = value;
	}

	set locality(value) {
		this._locality = value;
	}

	//endregion

	//region "title" Accessors

	getTitle() {
		return this._title;
	}

	get title() {
		return this._title;
	}

	setTitle(value) {
		this._title = value;
	}

	set title(value) {
		this._title = value;
	}

	//endregion

	//region "surname" Accessors

	getSurname() {
		return this._surname;
	}

	get surname() {
		return this._surname;
	}

	setSurname(value) {
		this._surname = value;
	}

	set surname(value) {
		this._surname = value;
	}

	//endregion

	//region "givenName" Accessors

	getGivenName() {
		return this._givenName;
	}

	get givenName() {
		return this._givenName;
	}

	setGivenName(value) {
		this._givenName = value;
	}

	set givenName(value) {
		this._givenName = value;
	}

	//endregion

	//region "initials" Accessors

	getInitials() {
		return this._initials;
	}

	get initials() {
		return this._initials;
	}

	setInitials(value) {
		this._initials = value;
	}

	set initials(value) {
		this._initials = value;
	}

	//endregion

	//region "pseudonym" Accessors

	getPseudonym() {
		return this._pseudonym;
	}

	get pseudonym() {
		return this._pseudonym;
	}

	setPseudonym(value) {
		this._pseudonym = value;
	}

	set pseudonym(value) {
		this._pseudonym = value;
	}

	//endregion

	//region "generationQualifier" Accessors

	getGenerationQualifier() {
		return this._generationQualifier;
	}

	get generationQualifier() {
		return this._generationQualifier;
	}

	setGenerationQualifier(value) {
		this._generationQualifier = value;
	}

	set generationQualifier(value) {
		this._generationQualifier = value;
	}

	//endregion

	//region "emailAddress" Accessors

	getEmailAddress() {
		return this._emailAddress;
	}

	get emailAddress() {
		return this._emailAddress;
	}

	setEmailAddress(value) {
		this._emailAddress = value;
	}

	set emailAddress(value) {
		this._emailAddress = value;
	}

	//endregion

	toModel() {
		return {
			country: this._country,
			organization: this._organization,
			organizationUnit: this._organizationUnit,
			dnQualifier: this._dnQualifier,
			stateName: this._stateName,
			commonName: this._commonName,
			serialNumber: this._serialNumber,
			locality: this._locality,
			title: this._title,
			surname: this._surname,
			givenName: this._givenName,
			initials: this._initials,
			pseudonym: this._pseudonym,
			generationQualifier: this._generationQualifier,
			emailAddress: this._emailAddress
		};
	}
}

exports.Name = Name;
exports.Certificate = Certificate;
exports.BaseCertificate = BaseCertificate;