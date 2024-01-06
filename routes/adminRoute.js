const express = require('express')
const router = express.Router()
const validation = require('../middlewares/validation')
const adminController = require('../controllers/adminController')

router.post('/login',validation.loginValidation,adminController.login)

module.exports = router