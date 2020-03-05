import * as joi from '@hapi/joi';
import {InvalidInformation} from "../../errors/validation/invalidInformation";
import {Validation} from "../../models/validation/validation";

class RegisterValidation implements Validation{
    schema = {
        name: joi.string().required(),
        surname: joi.string().required(),
        gender: joi.string().required(),
        email: joi.string().required().email(),
        password: joi.string().required()
    };

    check(req){

        try {
            const {error} = joi.validate(req.body , this.schema);
            if(error) throw new InvalidInformation();
        } catch (error) {
            throw error;
        }
    }
}

export default new RegisterValidation();
