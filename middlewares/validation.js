const {studentValidationSchema } = require('../helpers/validationSchema')

const studentValidation = async (req,res,next)=>{
    try {
        await studentValidationSchema.validateAsync(req.body)
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
    studentValidation
}