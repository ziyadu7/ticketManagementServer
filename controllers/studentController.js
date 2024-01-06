const studentModel = require('../models/studentModel')

const studentRegister = async (req, res) => {
    try {
        const { name, password } = req.body
        console.log(name, password);
        const isRegistered = await studentModel.findOne({ name })
        
        if(!isRegistered){
            
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

module.exports = {
    studentRegister
}