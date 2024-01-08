const {loginValidationSchema, addSubjectValidationSchema,addTicketValidationSchema,commentValidationSchema } = require('../helpers/validationSchema')

const loginValidation = async (req,res,next)=>{
    try {
        await loginValidationSchema.validateAsync(req.body)
        next()
    } catch (error) {
        if(error.isJoi === true){
            error.status = 422
            res.status(422).json({errMsg:error.message})
        }
        console.log(error.message);
    }
}

const addSubjectValidation = async (req,res,next)=>{
    try {
        await addSubjectValidationSchema.validateAsync(req.body)
        next()
    } catch (error) {
        if(error.isJoi === true){
            error.status = 422
            res.status(422).json({errMsg:error.message})
        }
        console.log(error.message);
    }
}

const addTicketValidation = async (req,res,next)=>{
    try {
        await addTicketValidationSchema.validateAsync(req.body)
        next()
    } catch (error) {
        if(error.isJoi === true){
            error.status = 422
            res.status(422).json({errMsg:error.message})
        }
        console.log(error.message);
    }
}

const addCommentValidation = async (req,res,next)=>{
    try {
        await commentValidationSchema.validateAsync(req.body)
        next()
    } catch (error) {
        if(error.isJoi === true){
            error.status = 422
            res.status(422).json({errMsg:error.message})
        }
        console.log(error.message);
    }
}

module.exports = {
    loginValidation,
    addSubjectValidation,
    addTicketValidation,
    addCommentValidation
}