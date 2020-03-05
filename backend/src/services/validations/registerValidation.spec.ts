import registerValidation from "./registerValidation";

describe('RegisterValidation Test', () => {

    let validSchema = {
        name: 'test',
        surname: 'test',
        gender: 'U',
        email: 'test@test.com',
        password: 'test'
    };

    let emptyField = {
        name: 'test',
        surname: 'test',
        email: 'test@test.com',
        password: 'test'
    };

    let typeError = {
        name: 'test',
        surname: 'test',
        gender: 'U',
        email: 'test@test.com',
        password: 123456
    };

    describe('when a valid body is given', () => {
        const req = {body: validSchema};
        it('should successfully return', function () {
            expect(() => {registerValidation.check(req)}).not.toThrow();
        });
    });

    describe('when a required field is empty', () => {
        const req = {body: emptyField};
        it('should throw an error', function () {
            expect(() => {registerValidation.check(req)}).toThrow();
        });
    });

    describe('when a field is not in correct type', () => {
        const req = {body: typeError};
        it('should throw an error', function () {
            expect(() => {registerValidation.check(req)}).toThrow();
        });
    });
});
