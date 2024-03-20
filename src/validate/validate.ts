import Joi from 'joi'
 export const registerValidate = (data: string) => {

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
 export const  createValidate = (data: string) => {

 const schema = Joi.object({
    title: Joi.string()
    .min(6)
    .required(),
    image: Joi.string()
    .optional(),
    content: Joi.string()
    .required()
    .min(10)
});
 return schema.validate(data)
}

