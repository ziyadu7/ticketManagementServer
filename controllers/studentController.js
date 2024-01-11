const { generateToken } = require('../middlewares/auth')
const adminModel = require('../models/adminModel')
const studentModel = require('../models/studentModel')
const sha256 = require('js-sha256')
const ticketModel = require('../models/ticketModel')
const subjectModel = require('../models/subjectModel')
const commentModel = require('../models/commentModel')

require('dotenv').config()

const studentRegister = async (req, res) => {
    try {
        const { name, password } = req.body
        const isRegistered = await studentModel.findOne({ where: { name: name } });
        if (!isRegistered) {
            await studentModel.create({ name, password: sha256(password + process.env.SALT), isAccepted: false })
            res.status(200).json({ message: "Student registered successfully" })
        } else {
            res.status(409).json({ errMsg: "Student already registered" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const studentLogin = async (req, res) => {
    try {
        const { name, password } = req.body
        const isRegistered = await studentModel.findOne({ where: { name: name, password: sha256(password + process.env.SALT) } });

        if (isRegistered) {
            if (!isRegistered.isAccepted) {
                return res.status(403).json({ errMsg: "Admins not accepted you" })
            } else {
                const token = generateToken({ id: isRegistered.id, role: 'student' })
                res.status(200).json({ token, name: isRegistered.name, role: 'student' })
            }
        } else {
            res.status(400).json({ errMsg: "User not registered with the name and password" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const fetchAdmins = async (req, res) => {
    try {
        const admins = await adminModel.findAll()
        res.status(200).json({ admins })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const addTicket = async (req, res) => {
    try {
        const { description, subject, assignee } = req.body
        const studentId = req?.payload?.id
        const createdDate = new Date()
        const date = createdDate.toLocaleDateString()
        if (subject == 0) {
            await ticketModel.create({ requestedBy: studentId, description, assignee, status: 'Pending', createdDate: date })
        } else {
            await ticketModel.create({ requestedBy: studentId, description, subject, assignee, status: 'Pending', createdDate: date })
        }
        res.status(200).json({ message: 'Ticket addedd successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const fetchTickets = async (req, res) => {
    try {
        const tickets = await ticketModel.findAll({
            include: [
                { model: studentModel, as: 'requestedByStudent', attributes: ['id', 'name'] },
                { model: adminModel, as: 'assigneeAdmin', attributes: ['id', 'name'] },
                { model: subjectModel, as: 'ticketSubject', attributes: ['id', 'subject','priority'] },
            ],
        })
        res.status(200).json({ tickets })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const addComment = async(req,res)=>{
    try {
        const {comment,ticketId} = req.body
        const {id} = req.payload
        const date = new Date().toLocaleDateString()

        await commentModel.create({date,comment,commentedBy:id,commentOf:ticketId})
        res.status(200).json({message:'comment added successfully'})

    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

module.exports = {
    studentRegister,
    studentLogin,
    fetchAdmins,
    addTicket,
    fetchTickets,
    addComment
}