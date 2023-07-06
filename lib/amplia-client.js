'use strict';
const { Certificate } = require('./certificate');
const { CertificateFormats } = require('./enums');
const { CertificateSummary } = require('./certificate-summary');
const { IssueCertificateRequest } = require('./issue-certificate-request');
const { Order } = require('./order');
const { PaginatedSearchParams } = require('./paginated-search-params');
const { PaginatedSearchResponse } = require('./paginated-search-response');
const { RestClient } = require('./rest-client');

const TypedApiRoutes = {
	[CertificateFormats.PKI_BRAZIL]: 'pki-brazil',
	[CertificateFormats.PKI_PARAGUAY]: 'pki-paraguay',
	[CertificateFormats.SSL]: 'ssl',
	[CertificateFormats.CNB]: 'cnb',
	[CertificateFormats.CIE]: 'cie',
	[CertificateFormats.ARISP]: 'arisp'
};

class AmpliaClient {

	constructor({ endpoint, apiKey } = {}) {
		this._endpoint = endpoint || null;
		this._apiKey = apiKey || null;
		this._restClient = null;
	}

	_getRestClient() {
		if (!this._restClient) {
			this._restClient = new RestClient({
				endpoint: this._endpoint,
				apiKey: this._apiKey
			});
		}
		return this._restClient
	}

	/**
	 * Creates a certificate order in Amplia
	 * 
	 * @param {CreateOrderRequest} request the request containing information
	 * about the order to be created
	 * @returns {Order} the representation of the created order
	 */
	createOrder(request) {
		return new Promise((resolve, reject) => {
			if (!request) {
				throw new Error('The request was not set');
			}
			if (!request.getParameters()) {
				throw new Error('The "parameters" field cannot be null');
			}
			let client = this._getRestClient();

			let format = request.getParameters().getFormat();
			let typedRouteSegment = AmpliaClient._getTypedRouteSegment(format);

			client
				.post(`api/orders/${typedRouteSegment}`, request)
				.then(response => {
					let model = response.getBody();
					let order = new Order(model);
					resolve(order);
				})
				.catch(err => reject(err));
		});
	}
	
	/**
	 * Creates a RSA Key in Amplia
	 * 
	 * @param {CreateKeyRequest} request the request containing information
	 * about the key to be created
	 * @returns {KeyModel} the representation of the created order
	 */
	createRSAKeyAsync(request){
		return new Promise((resolve, reject) => {
			if (!request) {
				throw new Error('The request was not set');
			}
			if (!request.getName()) {
				throw new Error('The "name" field cannot be null');
			}
			let client = this._getRestClient();
	
			client
				.post(`api/keys/`, request)
				.then(response => {
					let model = response.getBody();
					let order = new KeyModel(model);
					resolve(order);
				})
				.catch(err => reject(err));
		});
	}

	/**
	 * Retrieves an order from Amplia
	 * 
	 * @param {string} orderId the ID of the desired order
	 * @returns {Order} the desired order
	 */
	getOrder(orderId) {
		return new Promise((resolve, reject) => {
			if (!orderId) {
				throw new Error('The orderId was not set');
			}
			let client = this._getRestClient();

			client
				.get(`api/v2/orders/${orderId}`)
				.then(response => {
					let model = response.getBody();
					let order = new Order(model);
					resolve(order);
				})
				.catch(err => reject(err));
		});
	}

	getOrderIssueLink(orderId, returnUrl = null) {
		return new Promise((resolve, reject) => {
			if (!orderId) {
				throw new Error('The orderId was not set');
			}
			let client = this._getRestClient();

			let url = `api/orders/${orderId}/issue-link`;
			if (returnUrl) {
				let encodedUrl = encodeURIComponent(returnUrl);
				url += `?returnUrl=${encodedUrl}`;
			}

			client
				.get(url)
				.then(response => {
					let issueLink = response.getBody();
					resolve(issueLink);
				})
				.catch(err => reject(err));
		});
	}

	/**
	 * Deletes an order in Amplia
	 *  
	 * @param {string} orderId the ID of the desired order 
	 */
	deleteOrder(orderId) {
		return new Promise((resolve, reject) => {
			if (!orderId) {
				throw new Error('The orderId was not set');
			}
			let client = this._getRestClient();

			client.del(`api/orders/${orderId}`)
				.then(() => resolve())
				.catch(err => reject(err));
		});
	}

	issueCertificate(orderId, csr, keyMedia = null) {
		return new Promise((resolve, reject) => {
			let client = this._getRestClient();
			let request = new IssueCertificateRequest({ orderId, csr, keyMedia });

			client
				.post('api/v2/certificates', request)
				.then(response => {
					let model = response.getBody();
					let cert = new Certificate(model);
					resolve(cert);
				})
				.catch(err => reject(err));
		});
	}

	issueCertificate(orderId, keyId) {
		return new Promise((resolve, reject) => {
			let client = this._getRestClient();
			let request = new IssueCertificateRequest({ orderId, keyId });

			client
				.post('api/v2/certificates', request)
				.then(response => {
					let model = response.getBody();
					let cert = new KeyModel(model);
					resolve(cert);
				})
				.catch(err => reject(err));
		});
	}

	listCertificates(searchParams = null, validOnly = false) {
		return new Promise((resolve, reject) => {
			if (searchParams && !(searchParams instanceof PaginatedSearchParams)) {
				throw new Error('The "searchParams" parameter is not a instance of the PaginatedSearchParams class.');
			}
			let client = this._getRestClient();
			let url = AmpliaClient._setPaginatedSearchParams('api/v2/certificates', searchParams || new PaginatedSearchParams()) + `&validOnly=${validOnly}`;

			client
				.get(url)
				.then(response => {
					let model = response.getBody();
					let pagResponse = new PaginatedSearchResponse(model, CertificateSummary);
					resolve(pagResponse);
				})
				.catch(err => reject(err));
		});
	}

	getCertificate(certificateId, fillContent = false) {
		return new Promise((resolve, reject) => {
			if (!certificateId) {
				throw new Error('The certificateId was not set');
			}
			let client = this._getRestClient();

			client
				.get(`api/v2/certificates/${certificateId}?fillContent=${fillContent}`)
				.then(response => {
					let model = response.getBody();
					let cert = new Certificate(model);
					resolve(cert);
				})
				.catch(err => reject(err));
		})
	}

	revokeCertificate(certificateId) {
		return new Promise((resolve, reject) => {
			if (!certificateId) {
				throw new Error('The certificateId was not set');
			}
			let client = this._getRestClient();

			client.del(`api/certificates/${certificateId}`)
				.then(() => resolve())
				.catch(err => reject(err));
		});
	}

	static _setPaginatedSearchParams(originalUri, searchParams) {
		return `${originalUri}?` +
			`q=${encodeURIComponent(searchParams.getQ())}&` +
			`limit=${searchParams.getLimit()}&` +
			`offset=${searchParams.getOffset()}&` +
			`order=${searchParams.getOrder()}`;
	}

	static _getTypedRouteSegment(format) {
		if (format in TypedApiRoutes) {
			return TypedApiRoutes[format];
		}
		throw `Certificate format not supported: ${format}`;
	}
}

module.exports.AmpliaClient = AmpliaClient;