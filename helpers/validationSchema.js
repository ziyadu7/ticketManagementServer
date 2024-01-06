const Joi = require('joi')

const loginValidationSchema = Joi.object({
    name:Joi.string().required(),
    password:Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/)
})

module.exports = {
    loginValidationSchema
}