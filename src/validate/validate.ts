import Joi from 'joi'
interface BlogData {
    title: string;
    image?: string;
    content: string;
  }
 export const registerValidate = (data: any) => {

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
 export const  loginValidate = (data: BlogData) => {

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
export const createValidate = (data: any) => {
    const schema = Joi.object({
      title: Joi.string().min(6).required(),
      image: Joi.string().optional(),
      content: Joi.string().required().min(10),
    });
    return schema.validate(data);
  }
export const updateValidate = (data: any) => {
    const schema = Joi.object({
      title: Joi.string().min(6).required(),
      image: Joi.string().required(),
      content: Joi.string().required().min(10),
    });
    return schema.validate(data);
  }
export const userUpdateValidate = (data: any) => {
    const schema = Joi.object({
      username: Joi.string().min(4).optional(),
      email: Joi.string().optional(),
      password: Joi.string().optional().min(10),
    });
    return schema.validate(data);
  }
