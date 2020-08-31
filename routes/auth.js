const express = require('express')
const controller = require('../controllers/auth')
const passport = require('passport')
const router = express.Router()



router.post('/login', controller.login)
router.post('/register', controller.register)


module.exports = router