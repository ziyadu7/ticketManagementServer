const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const validation = require('../middlewares/validation')

router.post('/register',validation.loginValidation,studentController.studentRegister)
router.post('/login',validation.loginValidation,studentController.studentLogin)
router.get('/tickets')

module.exports = router