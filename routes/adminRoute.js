const express = require('express')
const router = express.Router()
const validation = require('../middlewares/validation')
const adminController = require('../controllers/adminController')
const commonController = require('../controllers/commonController')
const auth = require('../middlewares/auth')

router.post('/login',validation.loginValidation,adminController.login)
router.get('/getStudents',auth.verifyAdminToken,adminController.getStudents)
router.patch('/acceptStudent',auth.verifyAdminToken,adminController.acceptStudent)
router.post('/addSubject',auth.verifyAdminToken,validation.addSubjectValidation,adminController.addSubject)
router.post('/addAdmin',auth.verifyAdminToken,validation.loginValidation,adminController.addAdmin)
router.get('/getSubjects',auth.verifyAdminToken,commonController.getSubjects)
router.get('/fetchComments/:ticketId',auth.verifyAdminToken,commonController.fetchComments)
router.get('/getTickets',auth.verifyAdminToken,adminController.getTickets)
router.put('/updateStatus/:ticketId',auth.verifyAdminToken,adminController.updateStatus)
router.delete('/deleteSubject/:subjectId',auth.verifyAdminToken,adminController.deleteSubject)

module.exports = router