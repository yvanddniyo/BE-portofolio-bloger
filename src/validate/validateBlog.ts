
import Joi from 'joi'

export const blogSchema = Joi.object({
    title: Joi.string().required().min(4).max(20),
    content: Joi.string().required(),
    image: Joi.string().required().min(10)
})

export const querySchema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    message: Joi.string().max(1000).required(),
});


export const updateBlogSchema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    image: Joi.string().optional()
})

 export const updateUserSchema = Joi.object({
    name: Joi.string().min(4).max(12).optional(),
    email: Joi.string().email().optional(),
    role: Joi.string().trim().optional(),
    password: Joi.string().trim().optional()
 })

 

