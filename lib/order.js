'use strict';
const { OrderStatus } = require('./enums');
const { CertificateParameters } = require('./certificate-parameters');

class BaseOrder {

	constructor({ id, caId, templateId, alias, emailAddress, certificateId, status } = {}) {
		this._id = id || null;
		this._caId = caId || null;
		this._templateId = templateId || null;
		this._alias = alias || null;
		this._emailAddress = emailAddress || null;
		this._certificateId = certificateId || null;
		this._status = status || null;
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

	//region "certificateId" Accessors

	getCertificateId() {
		return this._certificateId;
	}

	get certificateId() {
		return this._certificateId;
	}

	setCertificateId(value) {
		this._certificateId = value;
	}

	set certificateId(value) {
		this._certificateId = value;
	}

	//endregion

	//region "status" Accessors

	getStatus() {
		return this._status;
	}

	get status() {
		return this._status;
	}

	setStatus(value) {
		this._status = value;
	}

	set status(value) {
		this._status = value;
	}

	//endregion

	toModel() {

		if (this._status) {
			switch (this._status) {
				case OrderStatus.PENDING:
				case OrderStatus.LOCKED:
				case OrderStatus.ISSUED:
					break;
				default:
					throw new Error(`Unsupported "status" field on model for BaseOrder: ${status}`);
			}
		}

		return {
			id: this._id,
			caId: this._caId,
			templateId: this._templateId,
			alias: this._alias,
			emailAddress: this._emailAddress,
			certificateId: this._certificateId,
			status: this._status
		};
	}
}

class Order extends BaseOrder {

	constructor({ parameters, ...model } = {}) {
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
			throw new Error(`Unsupported type for "parameters" on model for Order: ${typeof (this._parameters)}`);
		}

		let model = super.toModel();
		model['parameters'] = this._parameters ? this._parameters.toModel() : null;
		return model;
	}
}

exports.BaseOrder = BaseOrder;
exports.Order = Order;