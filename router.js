const express = require('express')
const router = express.Router()
const userControl = require('./controller/userControl')

router.get('/', userControl.landingPage)
router.get('/register',userControl.register)
router.get('/contact',userControl.contact)
router.get('/about',userControl.about)
router.get('/menu',userControl.menu)

module.exports = router