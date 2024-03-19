import Joi from 'joi'
 export const registerValidate = (data: string) => {

// Validation schema
const schema = Joi.object({
    username: Joi.string()
    .min(6)
    .required(),
    email: Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required(),
    role: Joi.string()
});
 return schema.validate(data)
}
 export const  loginValidate = (data: string) => {

// Validation schema
const schema = Joi.object({
    email: Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required()
});
 return schema.validate(data)
}

// export default {
//     registerValidate,
//     loginValidate
// }
