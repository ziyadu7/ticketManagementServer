const studentModel = require('../models/studentModel')

const studentRegister = async (req,res)=>{
    try {
        const {name,password} = req.body
        const isRegistered = await studentModel.findOne({name})
        console.log(isRegistered);
    } catch (error) {
        res.status(500).json({errMsg:"Server Error"})
    }
}

module.exports = {
    studentRegister
}