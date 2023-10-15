const Joi = require("joi")

module.exports = {
    registerSchema: {
        body: Joi.object().required().keys({
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number().required(),
            phone: Joi.number().required(),
            gender: Joi.string().required(),
        })
    },
    changePasswordSchema: {
        body: Joi.object().required().keys({
            currentPassword: Joi.string().required(),
            newPassword: Joi.string().required()
        })
    },
    loginSchema: {
        body: Joi.object().required().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    },
    updateUserSchema: {
        body: Joi.object().required().keys({
            userName: Joi.string().required(),
            age: Joi.number().required()
        })
    }
}