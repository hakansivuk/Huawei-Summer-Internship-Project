import updateValidation from "./updateValidation";
import {InvalidInformation} from "../../errors/validation/invalidInformation";


describe('UpdateValidation Test', () => {

    let validSchema = {
        userId: 'test',
        name: 'test',
        surname: 'test',
        gender: 'U'
    };

    let emptyField = {
        name: 'test',
        surname: 'test',
        email: 'test@test.com',
    };

    let typeError = {
        name: 'test',
        surname: 'test',
        gender: 1,
        userId: 'test',
    };

    describe('when a valid body is given', () => {
        const req = {body: validSchema};
        it('should successfully return', function () {
            expect(() => {updateValidation.check(req)}).not.toThrow();
        });
    });

    describe('when a required field is empty', () => {
        const req = {body: emptyField};
        it('should throw an error', function () {
            expect(() => {updateValidation.check(req)}).toThrow(new InvalidInformation());
        });
    });

    describe('when a field is not in correct type', () => {
        const req = {body: typeError};
        it('should throw an error', function () {

            expect(function () {updateValidation.check(req)}).toThrow(new InvalidInformation());
        });
    });
});
