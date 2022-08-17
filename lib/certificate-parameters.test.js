const { PkiParaguayCertificateParameters } = require('./certificate-parameters');
const { PkiParaguayCertificateTypes } = require('./enums');

const VALID_GIVEN_NAMES = "valid-given-names";
const VALID_SURNAMES = "valid-surnames";
const VALID_DOCUMENT_NUMBER = "valid-document-number";

describe("PkiParaguayCertificateParameters", () => {
    test("should accept a valid type parameter", () => {
        const validTypes = [
            PkiParaguayCertificateTypes.FIRMA,
            PkiParaguayCertificateTypes.SELLO,
            PkiParaguayCertificateTypes.TRIBUTARIO,
        ];

        for (const validType of validTypes) {
            const parameters = new PkiParaguayCertificateParameters({
                givenNames: VALID_GIVEN_NAMES,
                surnames: VALID_GIVEN_NAMES,
                documentNumber: VALID_DOCUMENT_NUMBER,
                type: validType,
            });
            expect(parameters.type).toBe(validType);
            expect(parameters.toModel()["type"]).toBe(validType);
        }
    });

    test("should not accept an invalid type parameter", () => {
        const invalidValidType = "invalid-type";
        const errorMsg = `Unsupported "type" field: ${invalidValidType}. Please use only the enum PkiParaguayCertificateTypes for this field`;

        expect(() => new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            type: invalidValidType,
        })).toThrow(errorMsg);

        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        parameters.type = invalidValidType;
        expect(() => parameters.toModel()).toThrow(errorMsg);
    });

    test("should accept a nullable type parameter", () => {
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        expect(parameters.type).toBeNull();
        expect(parameters.toModel()["type"]).toBeNull();
    });

    test("should accept a nonempty organization", () => {
        const organization = "non-empty-organization";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            organization,
        });
        expect(parameters.organization).toBe(organization);
        expect(parameters.toModel()["organization"]).toBe(organization);
    });

    test("should accept a nullable or empty organization", () => {
        const parametersWithNullableOrganization = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        expect(parametersWithNullableOrganization.organization).toBeNull();
        expect(parametersWithNullableOrganization.toModel()["organization"]).toBeNull();

        const emptyOrganization = "";
        const parametersWithEmptyOrganization = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            organization: emptyOrganization,
        });
        expect(parametersWithEmptyOrganization.organization).toBeNull();
        expect(parametersWithEmptyOrganization.toModel()["organization"]).toBeNull();
    });

    test("should accept a nonempty organization unit", () => {
        const organizationUnit = "non-empty-organization-unit";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            organizationUnit,
        });
        expect(parameters.organizationUnit).toBe(organizationUnit);
        expect(parameters.toModel()["organizationUnit"]).toBe(organizationUnit);
    });

    test("should accept a nullable or empty organization unit", () => {
        const parametersWithNullableOrganizationUnit = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        expect(parametersWithNullableOrganizationUnit.organizationUnit).toBeNull();
        expect(parametersWithNullableOrganizationUnit.toModel()["organizationUnit"]).toBeNull();

        const emptyOrganizationUnit = "";
        const parametersWithEmptyOrganizationUnit = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            organizationUnit: emptyOrganizationUnit,
        });
        expect(parametersWithEmptyOrganizationUnit.organizationUnit).toBeNull();
        expect(parametersWithEmptyOrganizationUnit.toModel()["organizationUnit"]).toBeNull();
    });

    test("should accept a nonempty ruc", () => {
        const ruc = "non-empty-ruc";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            ruc,
        });
        expect(parameters.ruc).toBe(ruc);
        expect(parameters.toModel()["ruc"]).toBe(ruc);
    });

    test("should accept a nullable or empty ruc", () => {
        const parametersWithNullableRuc = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        expect(parametersWithNullableRuc.ruc).toBeNull();
        expect(parametersWithNullableRuc.toModel()["ruc"]).toBeNull();

        const emptyRuc = "";
        const parametersWithEmptyRuc = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            ruc: emptyRuc,
        });
        expect(parametersWithEmptyRuc.ruc).toBeNull();
        expect(parametersWithEmptyRuc.toModel()["ruc"]).toBeNull();
    });

    test("should accept a nonempty title", () => {
        const title = "non-empty-title";
        const parameters = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            title,
        });
        expect(parameters.title).toBe(title);
        expect(parameters.toModel()["title"]).toBe(title);
    });

    test("should accept a nullable or empty title", () => {
        const parametersWithNullableTitle = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
        });
        expect(parametersWithNullableTitle.title).toBeNull();
        expect(parametersWithNullableTitle.toModel()["title"]).toBeNull();

        const emptyTitle = "";
        const parametersWithEmptyTitle = new PkiParaguayCertificateParameters({
            givenNames: VALID_GIVEN_NAMES,
            surnames: VALID_GIVEN_NAMES,
            documentNumber: VALID_DOCUMENT_NUMBER,
            title: emptyTitle,
        });
        expect(parametersWithEmptyTitle.title).toBeNull();
        expect(parametersWithEmptyTitle.toModel()["title"]).toBeNull();
    });
});