const { toModel } = require('./model-transform');

class NameModel {
	constructor({
		country,
		organization,
		organizationIdentifier,
		organizationUnit,
		businessCategory,
		dnQualifier,
		stateName,
		commonName,
		serialNumber,
		locality,
		streetAddress,
		postalCode,
		title,
		surname,
		givenName,
		initials,
		pseudonym,
		generationQualifier,
		emailAddress,
		evCountry,
		evStateName,
		evLocality,
		allValues,
		organizationalUnits,
		dnString
	} = {}) {
		this._country = country || null;
		this._organization = organization || null;
		this._organizationIdentifier = organizationIdentifier || null;
		this._organizationUnit = organizationUnit || null;
		this._businessCategory = businessCategory || null;
		this._dnQualifier = dnQualifier || null;
		this._stateName = stateName || null;
		this._commonName = commonName || null;
		this._serialNumber = serialNumber || null;
		this._locality = locality || null;
		this._streetAddress = streetAddress || null;
		this._postalCode = postalCode || null;
		this._title = title || null;
		this._surname = surname || null;
		this._givenName = givenName || null;
		this._initials = initials || null;
		this._pseudonym = pseudonym || null;
		this._generationQualifier = generationQualifier || null;
		this._emailAddress = emailAddress || null;
		this._evCountry = evCountry || null;
		this._evStateName = evStateName || null;
		this._evLocality = evLocality || null;
		this._allValues = allValues || null;
		this._organizationalUnits = organizationalUnits || null;
		this._dnString = dnString || null;
	}
  
	get country() {
		return this._country;
	}
  
	set country(value) {
		this._country = value;
	}
  
	get organization() {
		return this._organization;
	}
  
	set organization(value) {
		this._organization = value;
	}
  
	get organizationIdentifier() {
		return this._organizationIdentifier;
	}
  
	set organizationIdentifier(value) {
		this._organizationIdentifier = value;
	}
  
	get organizationUnit() {
		return this._organizationUnit;
	}
  
	set organizationUnit(value) {
		this._organizationUnit = value;
	}
  
	get businessCategory() {
		return this._businessCategory;
	}
  
	set businessCategory(value) {
		this._businessCategory = value;
	}
  
	get dnQualifier() {
		return this._dnQualifier;
	}
  
	set dnQualifier(value) {
		this._dnQualifier = value;
	}
  
	get stateName() {
		return this._stateName;
	}
  
	set stateName(value) {
		this._stateName = value;
	}
  
	get commonName() {
		return this._commonName;
	}
  
	set commonName(value) {
		this._commonName = value;
	}
  
	get serialNumber() {
		return this._serialNumber;
	}
  
	set serialNumber(value) {
		this._serialNumber = value;
	}
  
	get locality() {
		return this._locality;
	}
  
	set locality(value) {
		this._locality = value;
	}
  
	get streetAddress() {
		return this._streetAddress;
	}
  
	set streetAddress(value) {
		this._streetAddress = value;
	}
  
	get postalCode() {
		return this._postalCode;
	}
  
	set postalCode(value) {
		this._postalCode = value;
	}
  
	get title() {
		return this._title;
	}
  
	set title(value) {
		this._title = value;
	}
  
	get surname() {
		return this._surname;
	}
  
	set surname(value) {
		this._surname = value;
	}
  
	get givenName() {
		return this._givenName;
	}
  
	set givenName(value) {
		this._givenName = value;
	}
  
	get initials() {
		return this._initials;
	}
  
	set initials(value) {
		this._initials = value;
	}
  
	get pseudonym() {
		return this._pseudonym;
	}
  
	set pseudonym(value) {
		this._pseudonym = value;
	}
    
	get generationQualifier() {
		return this._generationQualifier;
	}
  
	set generationQualifier(value) {
		this._generationQualifier = value;
	}
  
	get emailAddress() {
		return this._emailAddress;
	}
  
	set emailAddress(value) {
		this._emailAddress = value;
	}
  
	get evCountry() {
		return this._evCountry;
	}
  
	set evCountry(value) {
		this._evCountry = value;
	}
  
	get evStateName() {
		return this._evStateName;
	}
  
	set evStateName(value) {
		this._evStateName = value;
	}
  
	get evLocality() {
		return this._evLocality;
	}
  
	set evLocality(value) {
		this._evLocality = value;
	}
  
	get allValues() {
		return this._allValues;
	}
  
	set allValues(value) {
		this._allValues = value;
	}
  
	get organizationalUnits() {
		return this._organizationalUnits;
	}
  
	set organizationalUnits(value) {
		this._organizationalUnits = value;
	}
  
	get dnString() {
		return this._dnString;
	}
  
	set dnString(value) {
		this._dnString = value;
	}

	toModel(){
		return toModel(this);
	}
}

exports.NameModel = NameModel;