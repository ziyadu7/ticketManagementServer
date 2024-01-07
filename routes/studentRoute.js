const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const commonController = require('../controllers/commonController')
const auth = require('../middlewares/auth')
const validation = require('../middlewares/validation')

router.post('/register',validation.loginValidation,studentController.studentRegister)
router.post('/login',validation.loginValidation,studentController.studentLogin)
router.get('/fetchAdmins',auth.verifyStudentToken,studentController.fetchAdmins)
router.get('/getSubjects',auth.verifyStudentToken,commonController.getSubjects)
router.get('/fetchTickets',auth.verifyStudentToken,studentController.fetchTickets)
router.post('/addTicket',auth.verifyStudentToken,validation.addTicketValidation,studentController.addTicket)

module.exports = router