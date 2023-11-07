'use strict';
const { Certificate } = require('./certificate');
const { CertificateFormats, KeyTypes } = require('./enums');
const { CertificateSummary } = require('./certificate-summary');
const { IssueCertificateRequest } = require('./issue-certificate-request');
const { Order } = require('./order');
const { PaginatedSearchParams } = require('./paginated-search-params');
const { PaginatedSearchResponse } = require('./paginated-search-response');
const { RestClient } = require('./rest-client');
const { SignHashResponse } = require('./sign-hash-response');
const { KeyModel } = require('./key-model');
const { IssueSoftwareCertificateRequest} = require( './issue-software-certificate-request');
const { IssueSoftwareCertificateResponse} = require( './issue-software-certificate-response');
const { IssuePkcs12CertificateResponse } = require('./issue-pkcs12-cert-response');
const { IssuePkcs12CertificateRequest } = require('./issue-pkcs12-cert-request');

const TypedApiRoutes = {
	[CertificateFormats.PKI_BRAZIL]: 'pki-brazil',
	[CertificateFormats.PKI_PARAGUAY]: 'pki-paraguay',
	[CertificateFormats.SSL]: 'ssl',
	[CertificateFormats.CNB]: 'cnb',
	[CertificateFormats.CIE]: 'cie',
	[CertificateFormats.ARISP]: 'arisp',
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
				apiKey: this._apiKey,
			});
		}
		return this._restClient;
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
				.then((response) => {
					let model = response.getBody();
					let order = new Order(model);
					resolve(order);
				})
				.catch((err) => reject(err));
		});
	}

	/**
	 * Creates a RSA Key in Amplia
	 *
	 * @param {CreateKeyRequest} request the request containing information
	 * about the key to be created
	 * @returns {KeyModel} the representation of the created order
	 */
	async createRSAKey(request) {
		if (!request) {
			throw new Error('The request was not set');
		}
		if (!request.getName()) {
			throw new Error('The "name" field cannot be null');
		}
		let client = this._getRestClient();
		request.keyType = KeyTypes.RSA;

		let response = await client.post('api/keys/', request);
		let model = response.getBody();
		let order = new KeyModel(model).toModel();
		return order;
	}

	/**
	 * Creates a RSA Protected Key in Amplia
	 *
	 * @param {CreateProtectedKeyRequest} request the request containing information
	 * about the key to be created
	 * @returns {KeyModel} the representation of the created order
	 */
	async createRSAProtectedKey(request) {
		if (!request) {
			throw new Error('The request was not set');
		}
		if (!request.getName()) {
			throw new Error('The "name" field cannot be null');
		}
		let client = this._getRestClient();
		request.keyType = KeyTypes.RSA;

		let response = await client.post('api/keys/protected', request);
		let model = response.getBody();
		let order = new KeyModel(model).toModel();
		return order;
	}

	/**
	 * Signs a hash with the assigned keyId
	 *
	 * @param {string} keyId the ID of the desired key
	 * @param {SignHashRequest} request the request containing info about
	 * the hash to be signed
	 * @returns {SignHashResponse} the response returned
	 */
	signHashWithKey(keyId, request) {
		return new Promise((resolve, reject) => {
			if (!request) {
				throw new Error('The request was not set');
			}
			if (!keyId) {
				throw new Error('The "keyId" field cannot be null');
			}
			let client = this._getRestClient();

			client
				.put(`api/keys/${keyId}/to-sign-hash`, request)
				.then((response) => {
					let model = response.getBody();
					let order = new SignHashResponse(model).toModel();
					resolve(order);
				})
				.catch((err) => reject(err));
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
				.then((response) => {
					let model = response.getBody();
					let order = new Order(model);
					resolve(order);
				})
				.catch((err) => reject(err));
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
				.then((response) => {
					let issueLink = response.getBody();
					resolve(issueLink);
				})
				.catch((err) => reject(err));
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

			client
				.del(`api/orders/${orderId}`)
				.then(() => resolve())
				.catch((err) => reject(err));
		});
	}

	/**
	 * Issues a certificate order from Amplia
	 *
	 * @param {string} orderId the ID of the desired order
	 * @returns {Order} the desired order
	 * @param {string} keyId the ID of the desired key
	 */
	issueCertificate(orderId, csr, keyMedia = null, keyId = null) {
		return new Promise((resolve, reject) => {
			let client = this._getRestClient();
			let request = keyId == null ? new IssueCertificateRequest({ orderId, csr, keyMedia }) : new IssueCertificateRequest({ orderId, keyId });

			client
				.post('api/v2/certificates', request)
				.then((response) => {
					let model = response.getBody();
					let cert = new Certificate(model);
					resolve(cert);
				})
				.catch((err) => reject(err));
		});
	}
	/**
	 * Issues a Certificate order from Amplia
	 *
	 * @param {string} orderId the ID of the desired order
	 * @param {string} password the password for the certificate
	 * @param {number} keySize the size of the key for this certificate
	 * @returns {Promise<IssueSoftwareCertificateResponse>} the response containing the certificate in many formats
	 */
	async issueSoftwareCertificate(orderId, password, keySize = null) {
			const client = this._getRestClient();
			const request = new IssueSoftwareCertificateRequest({ orderId, password, keySize });
			const response = await client.post('api/certificates/software', request);
			const cert = new IssueSoftwareCertificateResponse(response.getBody());
			return cert;
		}
	/**
	 * Issues a PKCS#12 certificate order from Amplia
	 *
	 * @param {string} orderId the ID of the desired order
	 * @param {string} password the password for the PKCS#12 certificate
	 * @param {number} keySize the size of the key for this certificate
	 * @returns {IssuePkcs12CertificateResponse} the response containing the .PFX file
	 */
	issuePkcs12Certificate(orderId, password, keySize = null) {
		return new Promise((resolve, reject) => {
			let client = this._getRestClient();
			let request = new IssuePkcs12CertificateRequest({ orderId, password, keySize });

			client
				.post('api/certificates/pkcs12', request)
				.then((response) => {
					let model = response.getBody();
					let cert = new IssuePkcs12CertificateResponse(model);
					resolve(cert);
				})
				.catch((err) => reject(err));
		});
	}

	listCertificates(
		searchParams = null,
		validOnly = false,
		subscriptionId = null
	) {
		return new Promise((resolve, reject) => {
			if (
				searchParams &&
				!(searchParams instanceof PaginatedSearchParams)
			) {
				throw new Error(
					'The "searchParams" parameter is not a instance of the PaginatedSearchParams class.'
				);
			}
			let client = this._getRestClient();
			let url = AmpliaClient._setPaginatedSearchParams('api/v2/certificates', searchParams || new PaginatedSearchParams()) + `&validOnly=${validOnly}` + `&subscriptionId=${subscriptionId}`;

			client
				.get(url)
				.then((response) => {
					let model = response.getBody();
					let pagResponse = new PaginatedSearchResponse(
						model,
						CertificateSummary
					);
					resolve(pagResponse);
				})
				.catch((err) => reject(err));
		});
	}

	getCertificate(certificateId, fillContent = false) {
		return new Promise((resolve, reject) => {
			if (!certificateId) {
				throw new Error('The certificateId was not set');
			}
			let client = this._getRestClient();

			client
				.get(
					`api/v2/certificates/${certificateId}?fillContent=${fillContent}`
				)
				.then((response) => {
					let model = response.getBody();
					let cert = new Certificate(model);
					resolve(cert);
				})
				.catch((err) => reject(err));
		});
	}

	revokeCertificate(certificateId) {
		return new Promise((resolve, reject) => {
			if (!certificateId) {
				throw new Error('The certificateId was not set');
			}
			let client = this._getRestClient();

			client
				.del(`api/certificates/${certificateId}`)
				.then(() => resolve())
				.catch((err) => reject(err));
		});
	}

	static _setPaginatedSearchParams(originalUri, searchParams) {
		return (
			`${originalUri}?` +
			`q=${encodeURIComponent(searchParams.getQ())}&` +
			`limit=${searchParams.getLimit()}&` +
			`offset=${searchParams.getOffset()}&` +
			`order=${searchParams.getOrder()}`
		);
	}

	static _getTypedRouteSegment(format) {
		if (format in TypedApiRoutes) {
			return TypedApiRoutes[format];
		}
		throw `Certificate format not supported: ${format}`;
	}
}

module.exports.AmpliaClient = AmpliaClient;
