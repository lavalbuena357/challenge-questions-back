const express = require('express')

const historyRoute = require('./controllers/history.js')
const usersRoute = require('./controllers/user.js')
const levelsRoute = require('./controllers/levels.js')
const prizesRoute = require('./controllers/prize.js')

const router = express.Router()
router.use(express.json())

router.use('/history', historyRoute)
router.use('/users', usersRoute)
router.use('/levels', levelsRoute)
router.use('/prizes', prizesRoute)

module.exports = router