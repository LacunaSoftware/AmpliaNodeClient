'use strict';
const { CertificateParameters } = require('./certificate-parameters');
const { CertificateKinds } = require('./enums');

class CreateOrderRequest {

	constructor({ caId, templateId, kind, copyToCertificate, parameters, validityEnd } = {}) {
		this._caId = caId || null;
		this._templateId = templateId || null;
		this._kind = kind || null;
		this._copyToCertificate = copyToCertificate || null;
		this._parameters = parameters || null;
		this._validityEnd = validityEnd || null;
	}

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

	//region "templateId" Accessors

	getTemplateId() {
		return this._templateId;
	}

	get templateId() {
		return this._templateId;
	}

	setTemplateId(value) {
		this._templateId = value;
	}

	set templateId(value) {
		this._templateId = value;
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

	//region "copyToTemplate" Accessors

	getCopyToTemplate() {
		return this._copyToTemplate;
	}

	get copyToTemplate() {
		return this._copyToTemplate;
	}

	setCopyToTemplate(value) {
		this._copyToTemplate = value;
	}

	set copyToTemplate(value) {
		this._copyToTemplate = value;
	}

	//endregion

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

	toModel() {
		if (!this._parameters) {
			throw new Error('The "parameters" field was not set');
		}

		if (this._parameters && !(this._parameters instanceof CertificateParameters)) {
			throw new Error(`Unsupported type for "parameters" on model for CreateOrderRequest: ${typeof(this._parameters)}`);
		}

		if (this._kind) {
			switch (this._kind) {
				case CertificateKinds.PUBLIC_KEY:
				case CertificateKinds.ATTRIBUTE:
					break;
				default:
					throw new Error(`Unsupported "kind" field on model for CreateOrderRequest: ${this._kind}`);
			}
		}

		return {
			caId: this._caId,
			templateId: this._templateId,
			kind: this._kind,
			copyToTemplate: this._copyToTemplate,
			parameters: this._parameters ? this._parameters.toModel() : null,
			validityEnd: this._validityEnd
		};
	}
}

exports.CreateOrderRequest = CreateOrderRequest;