const Joi = require('joi')

const studentValidationSchema = Joi.object({
    name:Joi.string().required(),
    password:Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/)
})

module.exports = {
    studentValidationSchema
}