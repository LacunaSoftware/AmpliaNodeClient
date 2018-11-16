'use strict';

const CertificateKinds = {
	PUBLIC_KEY: 'PublicKey',
	ATTRIBUTE: 'Attribute',
};

const CertificateFormats = {
	PKI_BRAZIL: 'PkiBrazil',
	SSL: 'Ssl',
	CNB: 'Cnb',
	CIE: 'Cie',
	ARISP: 'Arisp',
};

const ArispRoles = {
	TABELIAO: 'Tabeliao',
	SUBSTITUTO: 'Substituto',
	ESCREVENTE: 'Escrevente',
};

const HeaderNames = {
	ISSUE_SESSION_STATE: 'X-Issue-Session-State',
	ISSUE_SESSION_EXPIRES: 'X-Issue-Session-Expires',
};

const QRCodeTypes = {
	CERTIFICATE_ISSUE: 'CertificateIssue',
};

const OrderStatus = {
	PENDING: 'Pending',
	LOCKED: 'Locked',
	ISSUED: 'Issued',
};

const PaginationOrders = {
	ASC: 'Asc',
	DESC: 'Desc'
};

exports.PaginationOrders = PaginationOrders;
exports.OrderStatus = OrderStatus;
exports.QRCodeTypes = QRCodeTypes;
exports.HeaderNames = HeaderNames;
exports.ArispRoles = ArispRoles;
exports.CertificateFormats = CertificateFormats;
exports.CertificateKinds = CertificateKinds;