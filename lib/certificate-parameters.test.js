const { faker } = require('@faker-js/faker');

const { PkiParaguayCertificateParameters } = require('./certificate-parameters');
const { PkiParaguayCertificateTypes, PkiParaguayDocumentTypes } = require('./enums');

const VALID_GIVEN_NAMES = "valid-given-names";
const VALID_SURNAMES = "valid-surnames";
const VALID_DOCUMENT_NUMBER = "valid-document-number";
const VALID_DOCUMENT_TYPE = PkiParaguayDocumentTypes.CedulaDeIdentidad;

describe("PkiParaguayCertificateParameters", () => {
    test("should accept a valid type parameter in constructor", () => {
        const validTypes = [
            PkiParaguayCertificateTypes.FIRMA,
            PkiParaguayCertificateTypes.SELLO,
            PkiParaguayCertificateTypes.TRIBUTARIO,
        ];

        for (const validType of validTypes) {
            const parameters = new PkiParaguayCertificateParameters({
                givenNames: VALID_GIVEN_NAMES,
                surnames: VALID_SURNAMES,
                documentNumber: VALID_DOCUMENT_NUMBER,
                documentType: VALID_DOCUMENT_TYPE,
                type: validType,
            });
            expect(parameters.type).toBe(validType);
        }
    });

    test("should not accept an invalid type parameter in constructor", () => {
        const invalidValidType = "invalid-type";
        const errorMsg = `Unsupported "type" field: ${invalidValidType}. Please use only the enum PkiParaguayCertificateTypes for this field`;

        expect(() => new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            type: invalidValidType,
        })).toThrow(errorMsg);
    });

    test("should not accept an invalid type parameter when generating model", () => {
        const invalidValidType = "invalid-type";
        const errorMsg = `Unsupported "type" field: ${invalidValidType}. Please use only the enum PkiParaguayCertificateTypes for this field`;

        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        parameters.type = invalidValidType;
        expect(() => parameters.toModel()).toThrow(errorMsg);
    });

    test("should accept a nullable type parameter", () => {
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        expect(parameters.type).toBeNull();
        expect(parameters.toModel()["type"]).toBeNull();
    });

    test("should accept a nonempty organization", () => {
        const organization = "non-empty-organization";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            organization,
        });
        expect(parameters.organization).toBe(organization);
    });

    test("should accept a nullable or empty organization", () => {
        const parametersWithNullableOrganization = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        expect(parametersWithNullableOrganization.organization).toBeNull();
        expect(parametersWithNullableOrganization.toModel()["organization"]).toBeNull();

        const emptyOrganization = "";
        const parametersWithEmptyOrganization = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            organization: emptyOrganization,
        });
        expect(parametersWithEmptyOrganization.organization).toBeNull();
        expect(parametersWithEmptyOrganization.toModel()["organization"]).toBeNull();
    });

    test("should not accept an organization with more than 200 characters", () => {
        const invalidOrganization = faker.random.alphaNumeric(201);
        const errorMsg = `The organization value is too big: ${invalidOrganization}. Please provide a string with at most 200 characters`;

        expect(() => new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            organization: invalidOrganization,
        })).toThrow(errorMsg);


        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        parameters.organization = invalidOrganization;
        expect(() => parameters.toModel()).toThrow(errorMsg);
    });

    test("should accept a nonempty organization unit", () => {
        const organizationUnit = "non-empty-organization-unit";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            organizationUnit,
        });
        expect(parameters.organizationUnit).toBe(organizationUnit);
        expect(parameters.toModel()["organizationUnit"]).toBe(organizationUnit);
    });

    test("should accept a nullable or empty organization unit", () => {
        const parametersWithNullableOrganizationUnit = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        expect(parametersWithNullableOrganizationUnit.organizationUnit).toBeNull();
        expect(parametersWithNullableOrganizationUnit.toModel()["organizationUnit"]).toBeNull();

        const emptyOrganizationUnit = "";
        const parametersWithEmptyOrganizationUnit = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            organizationUnit: emptyOrganizationUnit,
        });
        expect(parametersWithEmptyOrganizationUnit.organizationUnit).toBeNull();
        expect(parametersWithEmptyOrganizationUnit.toModel()["organizationUnit"]).toBeNull();
    });

    test("should accept a valid ruc", () => {
        const validRucs = [
            "17412404",
            "500276609",
            "3872424",
        ];

        for (const validRuc of validRucs) {
            const parameters = new PkiParaguayCertificateParameters({
                givenNames: VALID_GIVEN_NAMES,
                surnames: VALID_SURNAMES,
                documentNumber: VALID_DOCUMENT_NUMBER,
                documentType: VALID_DOCUMENT_TYPE,
                ruc: validRuc,
            });
            expect(parameters.ruc).toBe(validRuc);
        }
    });

    test("should accept a nullable or empty ruc", () => {
        const parametersWithNullableRuc = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        expect(parametersWithNullableRuc.ruc).toBeNull();
        expect(parametersWithNullableRuc.toModel()["ruc"]).toBeNull();

        const emptyRuc = "";
        const parametersWithEmptyRuc = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            ruc: emptyRuc,
        });
        expect(parametersWithEmptyRuc.ruc).toBeNull();
        expect(parametersWithEmptyRuc.toModel()["ruc"]).toBeNull();
    });

    test("should not accept an invalid ruc", () => {
        const invalidRuc = "invalid-ruc";
        const erroMsg = `The ruc is not valid: ${invalidRuc}. Please provide a valid value with the following format XXXXXX(XX?)(aZ*?)X without hyphens`
        expect(() => new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            ruc: invalidRuc,
        })).toThrow(erroMsg);
    });

    test("should accept a nonempty title", () => {
        const title = "non-empty-title";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            title,
        });
        expect(parameters.title).toBe(title);
        expect(parameters.toModel()["title"]).toBe(title);
    });

    test("should accept a nullable or empty title", () => {
        const parametersWithNullableTitle = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        expect(parametersWithNullableTitle.title).toBeNull();
        expect(parametersWithNullableTitle.toModel()["title"]).toBeNull();

        const emptyTitle = "";
        const parametersWithEmptyTitle = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
            title: emptyTitle,
        });
        expect(parametersWithEmptyTitle.title).toBeNull();
        expect(parametersWithEmptyTitle.toModel()["title"]).toBeNull();
    });

    test("should accept a valid documentType parameter", () => {
        const validDocumentTypes = [
            PkiParaguayDocumentTypes.CedulaDeIdentidad,
            PkiParaguayDocumentTypes.Pasaporte,
        ];

        for (const documentType of validDocumentTypes) {
            const parameters = new PkiParaguayCertificateParameters({
                givenNames: VALID_GIVEN_NAMES,
                surnames: VALID_SURNAMES,
                documentNumber: VALID_DOCUMENT_NUMBER,
                documentType: documentType,
            });
            expect(parameters.documentType).toBe(documentType);
            expect(parameters.toModel()["documentType"]).toBe(documentType);
        }
    });

    test("should not accept an invalid documentType parameter", () => {
        const invalidValidType = "invalid-document-type";
        const errorMsg = `Unsupported "documentType" field: ${invalidValidType}. Please use only the enum PkiParaguayDocumentTypes for this field`;

        expect(() => new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: invalidValidType,
        })).toThrow(errorMsg);

        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            documentType: VALID_DOCUMENT_TYPE,
        });
        parameters.documentType = invalidValidType;
        expect(() => parameters.toModel()).toThrow(errorMsg);
    });

    test("should not accept a nullable documentType parameter", () => {
        const errorMsg = "The \"documentType\" field was not set";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_SURNAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        expect(parameters.documentType).toBeNull();
        expect(() => parameters.toModel()).toThrow(errorMsg);
    });
});