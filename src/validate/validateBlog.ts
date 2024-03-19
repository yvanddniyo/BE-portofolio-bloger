import Joi from 'joi'
 export const createValidate = (data: string) => {

// Validation schema
const schema = Joi.object({
    title: Joi.string()
    .min(6)
    .required(),
    image: Joi.string()
    // .min(6)
    .required()
    .email(),
    content: Joi.string()
    .min(6)
    .required(),
    role: Joi.string()
});
 return schema.validate(data)
}
 export const  updateValidate = (data: string) => {

// Validation schema
const schema = Joi.object({
     title: Joi.string()
    .min(6)
    .email(),
     image: Joi.string()
    .min(6),
     content: Joi.string()
    .min(6)
    
});
 return schema.validate(data)
}

