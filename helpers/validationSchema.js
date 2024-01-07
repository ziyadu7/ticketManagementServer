const Joi = require('joi')

const loginValidationSchema = Joi.object({
    name:Joi.string().required(),
    password:Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/)
})

const addSubjectValidationSchema = Joi.object({
    subject:Joi.string().required(),
    priority:Joi.string().valid('high', 'medium', 'low').required()
})

const addTicketValidationSchema = Joi.object({
    subject:Joi.number().required(),
    assignee:Joi.number().required(),
    desctiption:Joi.string().required(),
    dueDate:Joi.date().required()
})

module.exports = {
    loginValidationSchema,
    addSubjectValidationSchema,
    addTicketValidationSchema
}