'use strict';
const { PaginationOrders } = require('./enums');

class PaginatedSearchParams {

	constructor({ q, limit, offset, order } = {}) {
		this.DEFAULT_LIMIT = 10;
		this._q = q || '';
		this._limit = limit || this.DEFAULT_LIMIT;
		this._offset = offset || 0;
		this._order = 0;

		if (order) {
			switch (order) {
			case PaginationOrders.ASC:
			case PaginationOrders.DESC:
				this._order = order;
				break;
			default:
				throw new Error(`Unsupported "order" field on model for PaginatedSearchParams: ${order}`);
			}
		}
	}

	//region "defaultLimit" Accessors

	getDefaultLimit() {
		return this.DEFAULT_LIMIT;
	}

	get defaultLimit() {
		return this.DEFAULT_LIMIT;
	}

	//endregion

	//region "q" Accessors

	getQ() {
		return this._q;
	}

	get q() {
		return this._q;
	}

	setQ(value) {
		this._q = value;
	}

	set q(value) {
		this._q = value;
	}

	//endregion

	//region "limit" Accessors

	getLimit() {
		return this._limit;
	}

	get limit() {
		return this._limit;
	}

	setLimit(value) {
		this._limit = value;
	}

	set limit(value) {
		this._limit = value;
	}

	//endregion

	//region "offset" Accessors

	getOffset() {
		return this._offset;
	}

	get offset() {
		return this._offset;
	}

	setOffset(value) {
		this._offset = value;
	}

	set offset(value) {
		this._offset = value;
	}

	//endregion

	//region "order" Accessors

	getOrder() {
		return this._order;
	}

	get order() {
		return this._order;
	}

	setOrder(value) {
		this._order = value;
	}

	set order(value) {
		this._order = value;
	}

	//endregion
}

exports.PaginatedSearchParams = PaginatedSearchParams;