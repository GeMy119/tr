const Joi = require("joi")

module.exports = {
    addTaskSchema: {
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            des: Joi.string().required(),
            status: Joi.string(),
            userId: Joi.string(),
            // asignTo: Joi.string().required(),
            deadline: Joi.date().required(),
        })
    },
    updateTaskSchema: {
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            des: Joi.string().required(),
            status: Joi.string().required()
        }),
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    deleteTaskSchema: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    }
}