const express = require('express')
const router = express.Router()
const validation = require('../middlewares/validation')
const adminController = require('../controllers/adminController')
const auth = require('../middlewares/auth')

router.post('/login',validation.loginValidation,adminController.login)
router.get('/getStudents',auth.verifyAdminToken,adminController.getStudents)
router.patch('/acceptStudent',auth.verifyAdminToken,adminController.acceptStudent)

module.exports = router