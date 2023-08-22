'use strict';

const CertificateKinds = {
	PUBLIC_KEY: 'PublicKey',
	ATTRIBUTE: 'Attribute',
};

const DigestAlgorithms = {
	SHA1: 'SHA1',
	SHA256: 'SHA256',
	SHA384: 'SHA384',
	SHA512: 'SHA512'
};

const KeyTypes = {
	RSA: 'RSA',
	EC: 'EC'
};

const CertificateFormats = {
	PKI_BRAZIL: 'PkiBrazil',
	PKI_PARAGUAY: 'PkiParaguay',
	SSL: 'Ssl',
	CNB: 'Cnb',
	CNB_CA: 'CnbCa',
	CIE: 'Cie',
	ARISP: 'Arisp',
	CUSTOM: 'Custom',
	PRIVATE_ID: 'PrivateID',
	ECUADOR_BCE: 'EcuadorBce',
	LATINUS: 'Latinus',
	BR_LABORAL: 'BRLaboral',
	PKI_CABO_VERDE: 'PkiCaboVerde',

};

const KeyMedia = {
	PC: 'PC',
	CRYPTO_DEVICE: 'CryptoDevice',
	MOBILE: 'Mobile',
	CLOUD: 'Cloud',
};

/**
 * Enum for valid PKI Paraguay document types.
 * 
 * @readonly
 * @enum {string}
 */
const PkiParaguayDocumentTypes = {
	CedulaDeIdentidad: 'CedulaDeIdentidad',
	Pasaporte: 'Pasaporte'
};

/**
 * Enum for valid PKI Paraguay certificate types.
 * 
 * @readonly
 * @enum {string}
 */
const PkiParaguayCertificateTypes = {
	FIRMA: 'Firma',
	SELLO: 'Sello',
	TRIBUTARIO: 'Tributario'
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

const AmpliaErrorCodes = {
	UNKNOWN: 'Unknown',
	REPOSITORY_NOT_FOUND: 'RepositoryNotFound',
	ORDER_NOT_FOUND: 'OrderNotFound',
	CERTIFICATE_NOT_FOUND: 'CertificateNotFound',
	TEMPLATE_NOT_FOUND: 'TemplateNotFound',
	BAD_BASE64_STRING: 'BadBase64String',
	BAD_ALGORITHM: 'BadAlgorithm',
	BAD_CERTIFICATE: 'BadCertificate',
	CERTIFICATE_ALREADY_REVOKED: 'CertificateAlreadyRevoked',
	ORDER_ALREADY_FULFILLED: 'OrderAlreadyFulfilled',
	ACCESS_DENIED_TO_ORDER: 'AccessDeniedToOrder',
	ACCESS_DENIED_TO_CERTIFICATE: 'AccessDeniedToCertificate',
	ACCESS_DENIED_TO_APPLICATION: 'AccessDeniedToApplication',
	ACCESS_DENIED_TO_REPOSITORY: 'AccessDeniedToRepository',
	SUBSCRIPTION_NOT_FOUND: 'SubscriptionNotFound',
	CA_NOT_FOUND: 'CANotFound',
	ACCESS_DENIED_TO_CA: 'AccessDeniedToCA',
	SUBSCRIPTION_REQUIRED: 'SubscriptionRequired',
	APPLICATION_NOT_FOUND: 'ApplicationNotFound',
	BAD_SUBSCRIPTION: 'BadSubscription',
	NORMAL_SUBSCRIPTION_REQUIRED: 'NormalSubscriptionRequired',
	NOT_REGISTERED: 'NotRegistered',
	AGENT_NOT_FOUND: 'AgentNotFound',
	AGENT_IS_NOT_USER: 'AgentIsNotUser',
	INVITE_NOT_FOUND: 'InviteNotFound',
	APPLICATION_KEY_NOT_FOUND: 'ApplicationKeyNotFound',
	APPLICATION_DELETED: 'ApplicationDeleted',
	APPLICATION_NAME_EXISTS: 'ApplicationNameExists',
	USER_NOT_FOUND: 'UserNotFound',
	INVALID_CLAIM_CODE: 'InvalidClaimCode',
	SEARCH_NOT_SUPPORTED: 'SearchNotSupported',
	EMAIL_DISABLED: 'EmailDisabled',
	HTTPS_REQUIRED: 'HttpsRequired',
	KEY_NOT_FOUND: 'KeyNotFound',
	CANNOT_DELETE_KEY_HAVING_CA: 'CannotDeleteKeyHavingCA',
	BAD_KEY_STORE: 'BadKeyStore',
	BAD_KEY_STORE_PARAMETERS: 'BadKeyStoreParameters',
	KEY_STORE_PARAMETERS_FAILED_VALIDATION: 'KeyStoreParametersFailedValidation',
	KEY_DELETED: 'KeyDeleted',
	KEY_NAME_EXISTS: 'KeyNameExists',
	KEY_SIZE_NOT_SUPPORTED: 'KeySizeNotSupported',
	DIGEST_ALGORITHM_NOT_SUPPORTED: 'DigestAlgorithmNotSupported',
	NAME_TYPE_STRATEGY_NOT_SUPPORTED: 'NameTypeStrategyNotSupported',
	BAD_NAME_SPEC: 'BadNameSpec',
	BAD_REQUEST: 'BadRequest',
	CERTIFICATE_INCOMPATIBLE_WITH_KEY: 'CertificateIncompatibleWithKey',
	CSR_REQUIRED: 'CsrRequired',
	CANNOT_CHANGE_CA_CONFIG: 'CannotChangeCAConfig',
	CA_NAME_EXISTS: 'CANameExists',
	CA_NOT_ACTIVE: 'CANotActive',
	CANNOT_DELETE_CA: 'CannotDeleteCA',
	CA_IS_FINAL: 'CAIsFinal',
	KEY_ALREADY_ASSOCIATED: 'KeyAlreadyAssociated',
	SUBSCRIPTION_MISMATCH: 'SubscriptionMismatch',
	CANNOT_INFER_CERTIFICATE: 'CannotInferCertificate',
	ISSUE_SESSION_MISSING: 'IssueSessionMissing',
	ISSUE_SESSION_EXPIRED: 'IssueSessionExpired',
	INVALID_ISSUE_SESSION: 'InvalidIssueSession',
	NO_MORE_CONFIRM_ATTEMPTS_REMAINING: 'NoMoreConfirmAttemptsRemaining',
	EXPIRES_AFTER_ISSUER: 'ExpiresAfterIssuer',
	CRL_NOT_FOUND: 'CrlNotFound',
	INVALID_CSR: 'InvalidCsr',
	CA_REQUIRED: 'CARequired',
	NOT_SUITABLE_TEMPALTE_FOUND: 'NoSuitableTemplateFound',
	KIND_REQUIRED: 'KindRequired',
	BAD_DATE: 'BadDate',
	ORDER_HAS_NO_CA: 'OrderHasNoCA',
	ORDER_HAS_NO_TEMPLATE: 'OrderHasNoTemplate',
	TEMPLATE_FORBIDS_CUSTOM_VALIDITY: 'TemplateForbidsCustomValidity',
	VALIDITY_REQUIRED: 'ValidityRequired',
	COPYING_FROM_CERTIFICATE_NOT_SUPPORTED: 'CopyingFromCertificateNotSupported',
	DNS_NAMES_REQUIRED: 'DnsNamesRequired',
	BAD_DNS_NAME: 'BadDnsName',
	CERTIFICATE_FORMAT_MISMATCH: 'CertificateFormatMismatch',
	BAD_CSR: 'BadCsr',
	KEY_TYPE_NOT_SUPPORTED: 'KeyTypeNotSupported',
	BAD_KEY_SIZE: 'BadKeySize',
	TEMPLATE_DELETED: 'TemplateDeleted',
	TEMPLATE_NAME_EXISTS: 'TemplateNameExists',
	BAD_TEMPLATE_PARAMETERS: 'BadTemplateParameters',
	TEMPLATE_FORBIDS_PARAMETER: 'TemplateForbidsParameter',
	CERTIFICATE_KIND_NOT_SUPPORTED: 'CertificateKindNotSupported',
	CSR_NOT_EXPECTED: 'CsrNotExpected',
	TEMPLATE_KIND_MISMATCH: 'TemplateKindMismatch',
	NOT_PK_CERTIFICATE_ORDER: 'NotPKCertificateOrder',
	BAD_ORDER_PARAMETERS: 'BadOrderParameters',
	FORMAT_REQUIED: 'FormatRequired',
	INVALID_CPF: 'InvalidCpf',
	INVALID_CNPJ: 'InvalidCnpj',
	INVALID_PHONE_NUMBER: 'InvalidPhoneNumber',
	ORDER_LOCKET: 'OrderLocked',
	ALREADY_CONFIRMED: 'AlreadyConfirmed',
	NOT_CONFIRMED: 'NotConfirmed',
	SMS_DISABLED: 'SmsDisabled',
	NO_EMAIL_ADDRESS: 'NoEmailAddress',
};

const HttpMethods = {
	GET: 'GET',
	POST: 'POST',
	DELETE: 'DELETE',
	PUT: 'PUT'
};

exports.HttpMethods = HttpMethods;
exports.AmpliaErrorCodes = AmpliaErrorCodes;
exports.PaginationOrders = PaginationOrders;
exports.PkiParaguayDocumentTypes = PkiParaguayDocumentTypes;
exports.PkiParaguayCertificateTypes = PkiParaguayCertificateTypes;
exports.OrderStatus = OrderStatus;
exports.QRCodeTypes = QRCodeTypes;
exports.HeaderNames = HeaderNames;
exports.ArispRoles = ArispRoles;
exports.CertificateFormats = CertificateFormats;
exports.CertificateKinds = CertificateKinds;
exports.KeyMedia = KeyMedia;
exports.KeyTypes = KeyTypes;
exports.DigestAlgorithms = DigestAlgorithms;
