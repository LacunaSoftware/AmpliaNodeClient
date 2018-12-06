'use strict';

class PaginatedSearchResponse {

	constructor({ items, totalCount } = {}, itemConstructor) {
		this._items = null;
		this._totalCount = totalCount || null;

		if (!itemConstructor) {
			throw new Error('No constructor was provided');
		}

		if (items) {
			this._items = items.map(i => new itemConstructor(i));
		}
	}

	//region "items" Accessors

	getItems() {
		return this._items;
	}

	get items() {
		return this._items;
	}

	setItems(value) {
		this._items = value;
	}

	set items(value) {
		this._items = value;
	}

	//endregion

	//region "totalCount" Accessors

	getTotalCount() {
		return this._totalCount;
	}

	get totalCount() {
		return this._totalCount;
	}

	setTotalCount(value) {
		this._totalCount = value;
	}

	set totalCount(value) {
		this._totalCount = value;
	}

	//endregion
}

exports.PaginatedSearchResponse = PaginatedSearchResponse;