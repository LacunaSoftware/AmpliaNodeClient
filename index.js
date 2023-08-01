'use strict';
const { AmpliaClient } = require('./lib/amplia-client');
const { AmpliaError } = require('./lib/amplia-error');
const {
	BaseCertificate,
	Certificate,
	Name
} = require('./lib/certificate');
const {
	ArispCertificateParameters,
	ArispCartorioInfo,
	ArispEndereco,
	CertificateParameters,
	CieCertificateParameters,
	CieInstitution,
	CnbCertificateParameters,
	PkiBrazilCertificateParameters,
	PkiParaguayCertificateParameters,
	SslCertificateParameters,
} = require('./lib/certificate-parameters');
const { CertificateSummary } = require('./lib/certificate-summary');
const { CreateKeyRequest } = require('./lib/create-key-request');
const { CreateOrderRequest } = require('./lib/create-order-request');
const { CreateProtectedKeyRequest } = require('./lib/create-protected-key-request');
const { CsrInfo } = require('./lib/csr-info');
const {
	CertificateKinds,
	CertificateFormats,
	ArispRoles,
	DigestAlgorithms,
	KeyTypes,
	HeaderNames,
	QRCodeTypes,
	OrderStatus,
	PaginationOrders,
	AmpliaErrorCodes,
	HttpMethods,
} = require('./lib/enums');
const { IssueCertificateRequest } = require('./lib/issue-certificate-request');
const { KeyModel } = require('./lib/key-model');
const { NameModel } = require('./lib/name-model');
const {
	Order,
	BaseOrder
} = require('./lib/order');
const { OrderLocketError } = require('./lib/order-locket-error');
const { PaginatedSearchParams } = require('./lib/paginated-search-params');
const { PaginatedSearchResponse } = require('./lib/paginated-search-response');
const { PinResult } = require('./lib/pin-result');
const { PinStatus } = require('./lib/pin-status');
const {
	CertificateQRCodeData,
	QRCodeData
} = require('./lib/qr-code-data');
const { QRCodeParser } = require('./lib/qr-code-parser');
const { RestBaseError } = require('./lib/rest-base-error');
const {
	Response,
	RestClient
} = require('./lib/rest-client');
const { RestError } = require('./lib/rest-error');
const { RestUnreachableError } = require('./lib/rest-unreachable-error');
const { RSAPublicParametersModel } = require('./lib/rsa-public-parameters');
const { SignHashRequest } = require('./lib/sign-hash-request');
const { SignHashResponse } = require('./lib/sign-hash-response');
const { toModel } = require('./lib/model-transform');

exports.AmpliaClient = AmpliaClient;
exports.AmpliaError = AmpliaError;
exports.ArispCertificateParameters = ArispCertificateParameters;
exports.ArispCartorioInfo = ArispCartorioInfo;
exports.ArispEndereco = ArispEndereco;
exports.BaseCertificate = BaseCertificate;
exports.Certificate = Certificate;
exports.Name = Name;
exports.CertificateParameters = CertificateParameters;
exports.CieCertificateParameters = CieCertificateParameters;
exports.CieInstitution = CieInstitution;
exports.CnbCertificateParameters = CnbCertificateParameters;
exports.SslCertificateParameters = SslCertificateParameters;
exports.CertificateSummary = CertificateSummary;
exports.CreateOrderRequest = CreateOrderRequest;
exports.CertificateKinds = CertificateKinds;
exports.CertificateFormats = CertificateFormats;
exports.ArispRoles = ArispRoles;
exports.HeaderNames = HeaderNames;
exports.QRCodeTypes = QRCodeTypes;
exports.OrderStatus = OrderStatus;
exports.PaginationOrders = PaginationOrders;
exports.AmpliaErrorCodes = AmpliaErrorCodes;
exports.HttpMethods = HttpMethods;
exports.IssueCertificateRequest = IssueCertificateRequest;
exports.Order = Order;
exports.OrderLocketError = OrderLocketError;
exports.BaseOrder = BaseOrder;
exports.PaginatedSearchParams = PaginatedSearchParams;
exports.PaginatedSearchResponse = PaginatedSearchResponse;
exports.PkiBrazilCertificateParameters = PkiBrazilCertificateParameters;
exports.PkiParaguayCertificateParameters = PkiParaguayCertificateParameters;
exports.CertificateQRCodeData = CertificateQRCodeData;
exports.QRCodeData = QRCodeData;
exports.QRCodeParser = QRCodeParser;
exports.RestBaseError = RestBaseError;
exports.Response = Response;
exports.RestClient = RestClient;
exports.RestError = RestError;
exports.RestUnreachableError = RestUnreachableError;
exports.SignHashResponse = SignHashResponse;
exports.SignHashRequest = SignHashRequest;
exports.RSAPublicParameters = RSAPublicParametersModel;
exports.PinStatus = PinStatus;
exports.PinResult = PinResult;
exports.NameModel = NameModel;
exports.KeyModel = KeyModel;
exports.CsrInfo = CsrInfo;
exports.CreateProtectedKeyRequest = CreateProtectedKeyRequest;
exports.CreateKeyRequest = CreateKeyRequest;
exports.DigestAlgorithms = DigestAlgorithms;
exports.KeyTypes = KeyTypes;
exports.toModel = toModel;