const { generateToken } = require('../middlewares/auth');
const adminModel = require('../models/adminModel');
const studentModel = require('../models/studentModel');
const subjectModel = require('../models/subjectModel');
const ticketModel = require('../models/ticketModel')

const login = async (req, res) => {
    try {
        const { name, password } = req.body
        const isAdmin = await adminModel.findOne({ where: { name, password } });

        if (isAdmin) {
            const token = generateToken({ id: isAdmin.id, role: 'admin' })
            res.status(200).json({ token, name: isAdmin.name, role: 'admin',isSuper:isAdmin.isSuper })
        } else {
            res.status(400).json({ errMsg: "You are not an admin or password is wrong" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const getStudents = async (req, res) => {
    try {
        const students = await studentModel.findAll({})
        res.status(200).json({ students })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const acceptStudent = async (req, res) => {
    try {
        const { studentId } = req.body
        await studentModel.update({ isAccepted: true }, { where: { id: studentId } })
        res.status(200).json({ message: "Accepted student" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const addSubject = async (req, res) => {
    try {
        const { subject, priority } = req.body
        await subjectModel.create({ subject, priority })
        res.status(200).json({ message: "Subject added successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const addAdmin = async (req, res) => {
    try {
        const { name,password,isSuper } = req.body
        await adminModel.create({name,password,isSuper})
        res.status(200).json({ message: "Admin added successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const getTickets = async (req, res) => {
    try {
        const { id } = req.payload
        const tickets = await ticketModel.findAll({
            where: { assignee: id },
            include: [
                { model: studentModel, as: 'requestedByStudent', attributes: ['id', 'name'] },
                { model: adminModel, as: 'assigneeAdmin', attributes: ['id', 'name'] },
                { model: subjectModel, as: 'ticketSubject', attributes: ['id', 'subject', 'priority'] },
            ],
        })

        res.status(200).json({ tickets })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const updateStatus = async (req, res) => {
    try {
        let { ticketId } = req.params
        const { status } = req.body
        ticketId = ticketId.slice(1, ticketId.length)
        const dueDate = new Date()
        const date = dueDate.toLocaleDateString()
        await ticketModel.update({ status, dueDate: date }, { where: { id: ticketId } })
        res.status(200).json({ message: 'Status changed successfully' })

    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const deleteSubject = async (req, res) => {
    try {
        let { subjectId } = req.params
        subjectId = subjectId.slice(1, subjectId.length)

        const tickets = await ticketModel.findAll({ where: { subject: subjectId } })
        if (tickets.length > 0) {
            return res.status(409).json({ errMsg: "The subject is in use" })
        } else {
            await subjectModel.destroy({ where: { id: subjectId } })
            return res.status(200).json({ message: 'subject deleted successfully' })
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}



module.exports = {
    login,
    getStudents,
    acceptStudent,
    addSubject,
    getTickets,
    updateStatus,
    deleteSubject,
    addAdmin
}