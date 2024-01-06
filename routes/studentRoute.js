const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.post('/register',studentController.studentRegister)
router.get('/tickets')

module.exports = router