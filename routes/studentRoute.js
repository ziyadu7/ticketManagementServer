const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const validation = require('../middlewares/validation')

router.post('/register',validation.studentValidation,studentController.studentRegister)
router.post('/login',validation.studentValidation,studentController.studentLogin)
router.get('/tickets')

module.exports = router