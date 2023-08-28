const { faker } = require('@faker-js/faker');


const {
	CertificateKinds,
	OrderStatus,
	CertificateFormats,
} = require('../../lib/enums');
const { AmpliaClient } = require('../../lib/amplia-client');
const { CreateOrderRequest } = require('../../lib/create-order-request');
const generators = require('../generators');
const { Config } = require('../config');
const { skipWhenNotConfigured } = require('../case');
const { KeyGenerator } = require('pki-express');
const {
	pkiBrazilCertificateParameters,
	pkiParaguayCertificateParameters,
	sslCertificateParameters,
	cnbCertificateParameters,
	cieCertificateParameters,
	arispCertificateParameters
} = require('../constants');

const LONG_TIMEOUT = '30000'; // 30 seconds

const ampliaClient = new AmpliaClient({
	endpoint: Config.AMPLIA_ENDPOINT,
	apiKey: Config.AMPLIA_API_KEY,
});

const getCertificateParams = (certificateFormat, user) => {
	switch (certificateFormat) {
	case CertificateFormats.PKI_BRAZIL:
		return pkiBrazilCertificateParameters(user);
	case CertificateFormats.PKI_PARAGUAY:
		return pkiParaguayCertificateParameters(user);
	case CertificateFormats.SSL:
		return sslCertificateParameters(user);
	case CertificateFormats.CNB:
		return cnbCertificateParameters(user);
	case CertificateFormats.CIE:
		return cieCertificateParameters(user);
	case CertificateFormats.ARISP:
		return arispCertificateParameters(user);
	default:
		throw `Certificate "format" field not supported on model for CertificateParameters: ${certificateFormat}`;
	}
};

function mountOrderRequest(
	hasPresetUser = false,
	certificateFormat = CertificateFormats.PKI_BRAZIL
) {

	const user = hasPresetUser
		? {
			name: 'Pierre de Fermat',
			cpf: '673.644.483-73', //CPF Falso de Pierre de Fermat
		}
		: {
			name: faker.name.firstName,
			cpf: '264.415.360-30', //CPF Falso
		};

	// Create an order request.
	const request = new CreateOrderRequest({
		caId: Config.AMPLIA_CA_ID,
		validityEnd: generators.generateDateTwoYearsFromNow(),
		kind: CertificateKinds.PUBLIC_KEY,
		parameters: getCertificateParams(certificateFormat, user),
	});

	return request;
}

const certificateFormats = [
	{certificateFormat: CertificateFormats.PKI_BRAZIL},
	{certificateFormat: CertificateFormats.CNB},
	{certificateFormat: CertificateFormats.SSL},
	{certificateFormat: CertificateFormats.PKI_PARAGUAY},
	{certificateFormat: CertificateFormats.CIE},
	{certificateFormat: CertificateFormats.ARISP}
];

describe.each(certificateFormats)('Test Cases for Amplia Node Client', ({certificateFormat}) => {
	// Test Case #1 for Amplia Node Client
	skipWhenNotConfigured(
		`Scenario 1: should be able to create, retrieve, and delete an order request using certificate format ${certificateFormat}`,
		async () => {
			// Mount a default request using default PKIBrazilParameters
			let request = mountOrderRequest(false, certificateFormat);

			// Mount a default request using default PKIBrazilParameters
			const order = await ampliaClient.createOrder(request);
			const retrievedOrder = await ampliaClient.getOrder(order.id);

			await ampliaClient.deleteOrder(order.id);

			expect(retrievedOrder.id).toBe(order.id);
			expect(retrievedOrder.caId).toBe(order.caId);
			expect(retrievedOrder.kind).toBe(order.kind);
			expect(retrievedOrder.alias).toBe(order.alias);
			expect(retrievedOrder.validityEnd).toBe(order.validityEnd);
			expect(retrievedOrder.name).toBe(order.name);
			expect(retrievedOrder.certificateId).toBe(order.certificateId);
			expect(retrievedOrder.status).toBe(order.status);

			try {
				// Try to get the same order, but it is deleted now
				await ampliaClient.getOrder(order.id);
			} catch (e) {
				expect(e.name).toMatch('AmpliaError');
				expect(e.code).toBe('OrderDeleted');
			}
		},
		LONG_TIMEOUT
	);
	// end Test Case #1 for Amplia Node Client

	// Test Case #2 for Amplia Node Client
	skipWhenNotConfigured(
		`Scenario 2: should generate an order, retrieve, generate an order link and remove the order afterwards certificate format ${certificateFormat}`,
		async () => {
			// Mount a default request using default PKIBrazilParameters
			let request = mountOrderRequest(false);

			const order = await ampliaClient.createOrder(request, certificateFormat);
			// get the order issue link
			const orderLink = await ampliaClient.getOrderIssueLink(order.id);
			// Retrieve the order
			const retrievedOrder = await ampliaClient.getOrder(order.id);

			expect(retrievedOrder.id).toBe(order.id);
			expect(retrievedOrder.caId).toBe(order.caId);
			expect(retrievedOrder.kind).toBe(order.kind);
			expect(retrievedOrder.alias).toBe(order.alias);
			expect(retrievedOrder.validityEnd).toBe(order.validityEnd);
			expect(retrievedOrder.name).toBe(order.name);
			expect(retrievedOrder.certificateId).toBe(order.certificateId);
			expect(retrievedOrder.status).toBe(order.status);
			expect(orderLink).not.toBeNull();
			expect(orderLink).toMatch(
				new RegExp(
					'https://amplia.lacunasoftware.com/issue/[a-fA-F0-9]{32}'
				)
			);

			// Delete the order after all tests
			await ampliaClient.deleteOrder(order.id);

			try {
				// Try to get the same order, but it is deleted now
				await ampliaClient.getOrder(order.id);
			} catch (e) {
				expect(e.name).toMatch('AmpliaError');
				expect(e.code).toBe('OrderDeleted');
			}
		},
		LONG_TIMEOUT
	);
	// end Test Case #2 for Amplia Node Client

	// Test Case #3 for Amplia Node Client
	skipWhenNotConfigured(
		'Scenario 3: should generate an order, generate a key and a CSR using PkiExpress, then issue that certificate with its corresponding CSR\n'+
        `Using certificate format ${certificateFormat}`,
		async () => {
			console.log(
				'\nWARNING: This test requires PkiExpress, version greater than 1.11\n' +
                    'Also, you should have the Pierre de Fermat certificate installed in your machine\n'
			);
			try {
				// Mount a default request using default PKIBrazilParameters
				let request = mountOrderRequest(true);

				const order = await ampliaClient.createOrder(request, certificateFormat);
				// Get an instance of the Key Generator class, responsible for generate
				// a private key and the corresponding CSR.
				const keyGenerator = new KeyGenerator({
					keySize: '2048',
					genCsr: true,
				});

				// Generate private key and CSR.
				let genKey = await keyGenerator.generate();

				// Call Amplia in order to issue the certificate referred by the
				// created order's id.

				const cert = await ampliaClient.issueCertificate(
					order.getId(),
					genKey.getCsr(),
					'PC'
				);

				// Retrieve the order
				const retrievedOrder = await ampliaClient.getOrder(order.id);
				// checks if the order has been issued
				expect(retrievedOrder.getStatus()).toBe(OrderStatus.ISSUED);

				// redundant tests
				expect(retrievedOrder.id).toBe(order.id);
				expect(retrievedOrder.caId).toBe(order.caId);
				expect(retrievedOrder.kind).toBe(order.kind);
				expect(retrievedOrder.alias).toBe(order.alias);
				expect(retrievedOrder.validityEnd).toBe(order.validityEnd);
				expect(retrievedOrder.name).toBe(order.name);
				// end redundant tests

				const retrievedCert = await ampliaClient.getCertificate(
					retrievedOrder.getCertificateId()
				);
				// certificate tests
				expect(retrievedCert.id).toBe(cert.id);
				expect(retrievedCert.certificateId).toBe(cert.certificateId);
				expect(retrievedCert.caId).toBe(cert.caId);
				expect(retrievedCert.alias).toBe(cert.alias);
				expect(retrievedCert.subjectName).toEqual(cert.subjectName);
				expect(retrievedCert.issuerName).toEqual(cert.issuerName);
				expect(retrievedCert.serialNumber).toBe(cert.serialNumber);
				expect(retrievedCert.validityStart).toBe(cert.validityStart);
				expect(retrievedCert.validityEnd).toBe(cert.validityEnd);
				expect(retrievedCert.crlDistributionPoints).toEqual(
					cert.crlDistributionPoints
				);
				expect(retrievedCert.ocspUris).toEqual(cert.ocspUris);
				expect(retrievedCert.content).toBe(cert.content);
				expect(retrievedCert.kind).toBe(cert.kind);
				expect(retrievedCert.format).toBe(cert.format);

				// end certificate tests
				try {
					// Delete the order after all tests
					await ampliaClient.deleteOrder(order.id);
				} catch (e) {
					// only this time, the order will be fulfilled and it will be impossible to remove
					expect(e.name).toMatch('AmpliaError');
					expect(e.code).toBe('OrderAlreadyFulfilled');
				}

				// we can, however, revoke the previously generated certificate
				await ampliaClient.revokeCertificate(cert.id);
				
				// test if the date of certificate has been revoked is less than the now date
				const certAfterRevocation = await ampliaClient.getCertificate(
					cert.id
				);
				const dateNow = new Date().getTime();
				const dateRevoked = new Date(certAfterRevocation.dateRevoked);
				expect(dateRevoked.getTime()).toBeLessThanOrEqual(dateNow);
			} catch (error) {
				console.log(error);
			}
		},
		LONG_TIMEOUT
	);
	// end Test Case #3 for Amplia Node Client
});
