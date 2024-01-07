const subjectModel = require("../models/subjectModel");

const getSubjects = async (req,res)=>{
    try {
        const subjects = await subjectModel.findAll()
        res.status(200).json({subjects})
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

module.exports = {
    getSubjects
}