'use strict';
const { URL } = require('url');

const { CertificateIssueQRCodeData } = require('./qr-code-data');
const { QRCodeTypes } = require('./enums');

const KnownEndpoints = {
	'w.e-notariado.org.br': new URL('https://ac.e-notariado.org.br/'),
	's.e-notariado.org.br': new URL('https://ac.staging.e-notariado.org.br/'),
	'localhost:44305': new URL('http://localhost:44305/')
};

class QRCodeParser {

	static parse(code) {

		let uri = null;
		try {
			uri = new URL(code);
		} catch(error) {
			throw `The QR Code is not in the expected format: ${code}`;
		}

		if (!(uri.host in KnownEndpoints)) {
			throw `Unknown QR Code base URL: ${uri.host}`;
		}

		let segments = uri.pathname.split('/').slice(1);

		if (segments.length < 3) {
			throw new Error(`Bad URL segment count: ${segments.length} (expected at least 3)`);
		}

		let typeStr = segments[0];
		let versionStr = segments[1];
		let args = segments.slice(2);

		let type = null;
		switch (typeStr) {
			case "ic":
				type = QRCodeTypes.CERTIFICATE_ISSUE;
				break;
			default:
				throw new `Unsupported QR Code Type: ${typeStr}`;
		}

		let version = parseInt(versionStr);
		if (!Number.isInteger(version) || version < 1) {
			throw new `Bad version: ${versionStr}`;
		}

		switch (type) {
			case QRCodeTypes.CERTIFICATE_ISSUE:
				if (version === 1) {
					return QRCodeParser._parseIssueCertificateQRCodeV1(uri, args);
				}
				throw `Certificate issue QR Code version not supported: ${version}`;
			default:
				throw `Unsupported type: ${type}`;
		}
	}

	static _parseIssueCertificateQRCodeV1(uri, args) {
		if (args.length !== 1) {
			throw `Bad argument count: ${args.length} (expected 1)`;
		}
		return new CertificateIssueQRCodeData({
			endpoint: uri,
			secret: args[0]
		});
	}
}

exports.QRCodeParser = QRCodeParser;