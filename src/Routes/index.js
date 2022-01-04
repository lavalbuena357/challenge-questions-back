const express = require('express')

const historyRoute = require('./controllers/history.js')
const usersRoute = require('./controllers/user.js')

const router = express.Router()
router.use(express.json())

router.use('/history', historyRoute)
router.use('/users', usersRoute)

module.exports = router