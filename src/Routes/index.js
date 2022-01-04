const express = require('express')

const historyRoute = require('./controllers/history.js')
const usersRoute = require('./controllers/user.js')
const levelsRoute = require('./controllers/levels.js')
const prizesRoute = require('./controllers/prize.js')
const questionsRoute = require('./controllers/questions.js')
const answersRoute = require('./controllers/answers.js')
const dataLoader = require('../utils/loader.js')

const router = express.Router()
router.use(express.json())

router.use('/history', historyRoute)
router.use('/users', usersRoute)
router.use('/levels', levelsRoute)
router.use('/prizes', prizesRoute)
router.use('/questions', questionsRoute)
router.use('/answers', answersRoute)
router.use(dataLoader)


module.exports = router