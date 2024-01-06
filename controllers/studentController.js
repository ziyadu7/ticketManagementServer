const studentModel = require('../models/studentModel')
const sha256 = require('js-sha256')
require('dotenv').config()

const studentRegister = async (req, res) => {
    try {
        const { name, password } = req.body
        const isRegistered = await studentModel.findOne({ name })
        if(!isRegistered){
            await studentModel.create({name,password:sha256(password+process.env.SALT)})
            res.status(200).json({message:"Student registered successfully"})
        }else{
            res.status(409).json({errMsg:"Student already registered"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

module.exports = {
    studentRegister
}