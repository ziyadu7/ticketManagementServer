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
router.get('/getSubjects',auth.verifyAdminToken,commonController.getSubjects)

module.exports = router