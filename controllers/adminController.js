const { generateToken } = require('../middlewares/auth');
const adminModel = require('../models/adminModel');
const studentModel = require('../models/studentModel');

const login = async (req,res)=>{
    try {
        const { name, password } = req.body
        const isAdmin = await adminModel.findOne({ where: { name,password } });
        
        if(isAdmin){
            const token = generateToken({id:isAdmin.id,role:'admin'})
            res.status(200).json({token,name:isAdmin.name,role:'admin'})
        }else{
            res.status(400).json({errMsg:"You are not an admin or password is wrong"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const getStudents = async (req,res)=>{
    try {
        const students = await studentModel.findAll({})
        res.status(200).json({students})
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const acceptStudent = async (req,res)=>{
    try {
        const {studentId} = req.body
         await studentModel.update({ isAccepted: true }, { where: { id: studentId } })
        res.status(200).json({message:"Accepted student"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}



module.exports = {
    login,
    getStudents,
    acceptStudent
}