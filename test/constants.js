const { faker } = require("@faker-js/faker");
const {
    PkiBrazilCertificateParameters,
    PkiParaguayCertificateParameters,
    SslCertificateParameters,
    CnbCertificateParameters,
    CieCertificateParameters,
    ArispCertificateParameters,
} = require("../lib/certificate-parameters");
const { PkiParaguayDocumentTypes } = require("../lib/enums");

const pkiBrazilCertificateParameters = (user) => {
    return new PkiBrazilCertificateParameters({
        name: user.name,
        emailAddress: "john@example.com",
        cnpj: "70.647.755/0001-68",
        companyName: "Example Company",
        cpf: user.cpf,
        birthDate: "1990-01-01",
        oabUF: "SP",
        oabNumero: "12345",
        rgEmissor: "SSP",
        rgEmissorUF: "SP",
        rgNumero: "67890",
        organizationUnits: ["IT", "Legal"],
        organization: "Example Organization",
        country: "Brazil",
        phoneNumber: faker.phoneNumber,
    });
};

// same kind as pkiBrazil, only different format
const cnbCertificateParameters = (user) => {
    return new CnbCertificateParameters({
        name: user,
        emailAddress: "john@example.com",
        cnpj: "70.647.755/0001-68",
        companyName: "Example Company",
        cpf: user.cpf,
        birthDate: "1990-01-01",
        oabUF: "SP",
        oabNumero: "12345",
        rgEmissor: "SSP",
        rgEmissorUF: "SP",
        rgNumero: "67890",
        organizationUnits: ["IT", "Legal"],
        organization: "Example Organization",
        country: "Brazil",
        phoneNumber: faker.phoneNumber,
    });
};

const sslCertificateParameters = (user) => {
    return new SslCertificateParameters({
        dnsNames: "dnsStringName",
    });
};
const cieCertificateParameters = (user) => {
    return new CieCertificateParameters({
        name: user.name,
        eea: "EU",
        birthDate: "1990-01-01",
        cpf: user.cpf,
        registrationNumber: "ABC123",
        idNumber: "XYZ789",
        idIssuer: "Government",
        idIssuerState: "StateX",
        institution: "University of Example",
        degree: "Computer Science",
        course: "Software Engineering",
    });
};
const pkiParaguayCertificateParameters = (user) => {
    return new PkiParaguayCertificateParameters({
        type: PkiParaguayCertificateTypes.TRIBUTARIO,
        organization: "Patorum S.A.",
        organizationalUnit: "Fabricación",
        ruc: "800806107",
        title: "Supervisor de producción",
        givenNames: "Roque González",
        surnames: "de Santa Cruz",
        documentType: PkiParaguayDocumentTypes.CedulaDeIdentidad,
        documentNumber: "1234567",
        emailAddress: "roque.cruz@mailinator.com",
        phoneNumber: "+595981555123",
    });
};

const arispCertificateParameters = (user) => {
    return new ArispCertificateParameters({
        nome: user.name,
        cpf: user.cpf,
        funcao: "Notary",
        cartorio: "Example Notary Office",
    });
};
module.exports = {
    pkiBrazilCertificateParameters: pkiBrazilCertificateParameters,
    cnbCertificateParameters: cnbCertificateParameters,
    sslCertificateParameters: sslCertificateParameters,
    cieCertificateParameters: cieCertificateParameters,
    pkiParaguayCertificateParameters: pkiParaguayCertificateParameters,
    arispCertificateParameters: arispCertificateParameters,
};
