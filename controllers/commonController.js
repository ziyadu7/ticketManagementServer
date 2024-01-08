const subjectModel = require("../models/subjectModel");
const commentModel = require('../models/commentModel');
const studentModel = require("../models/studentModel");

const getSubjects = async (req, res) => {
    try {
        const subjects = await subjectModel.findAll()
        res.status(200).json({ subjects })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

const fetchComments = async (req, res) => {
    try {
        let {ticketId} = req.params
        
        const comments = await commentModel.findAll({where:{commentOf:ticketId},
            include: [
                { model: studentModel, as: 'commentedByStudent', attributes: ['id', 'name'] }
            ],
        })
        res.status(200).json({ comments })
    } catch (error) {
        console.log(error);
        res.status(500).json({ errMsg: "Server Error" })
    }
}

module.exports = {
    getSubjects,
    fetchComments
}