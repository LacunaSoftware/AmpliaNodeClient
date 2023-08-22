const { faker } = require('@faker-js/faker');

const { PkiParaguayCertificateParameters } = require('../../lib/certificate-parameters');
const { CertificateKinds, PkiParaguayCertificateTypes, PkiParaguayDocumentTypes } = require('../../lib/enums');
const { AmpliaClient } = require('../../lib/amplia-client');
const { CreateOrderRequest } = require('../../lib/create-order-request');
const generators = require('../generators');
const { Config } = require('../config');
const { skipWhenNotConfigured } = require('../case');

const LONG_TIMEOUT = '30000'; // 30 seconds

describe('PKI Paraguay integration tests', () => {
	skipWhenNotConfigured('should be able to create, retrieve, and delete an order request with PKI paraguay parameters', async () => {
		const ampliaClient = new AmpliaClient({
			endpoint: Config.AMPLIA_ENDPOINT,
			apiKey: Config.AMPLIA_API_KEY,
		});

		const request = new CreateOrderRequest({
			caId: Config.AMPLIA_CA_ID,
			validityEnd: generators.generateDateTwoYearsFromNow(),
			kind: CertificateKinds.PUBLIC_KEY,
			parameters: new PkiParaguayCertificateParameters({
				givenNames: faker.name.firstName(),
				surnames: faker.name.lastName(),
				documentNumber: faker.random.alphaNumeric(),
				documentType: PkiParaguayDocumentTypes.CedulaDeIdentidad,
				type: PkiParaguayCertificateTypes.FIRMA,
				organization: faker.random.word(),
				organizationUnit: faker.random.word(),
				ruc: '500276609',
				title: faker.random.word(),
			}),
		});

		const order = await ampliaClient.createOrder(request);
		const retrievedOrder = await ampliaClient.getOrder(order.id);
		await ampliaClient.deleteOrder(order.id);

		expect(retrievedOrder.id).toBe(order.id);
		expect(retrievedOrder.caId).toBe(order.caId);
		expect(retrievedOrder.templateId).toBe(order.templateId);
		expect(retrievedOrder.alias).toBe(order.alias);
		expect(retrievedOrder.emailAddress).toBe(order.emailAddress);
		expect(retrievedOrder.certificateId).toBe(order.certificateId);
		expect(retrievedOrder.status).toBe(order.status);
		expect(retrievedOrder.ruc).toBe(order.ruc);

		try {
			await ampliaClient.getOrder(order.id);
		} catch (e) {
			expect(e.name).toMatch('AmpliaError');
			expect(e.code).toBe('OrderDeleted');
		}
	}, LONG_TIMEOUT);
});

