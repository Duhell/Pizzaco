const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const router = require('./router')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use('/', router)
app.listen(port, console.log(`Running on Port ${port}`))
module.exports = app