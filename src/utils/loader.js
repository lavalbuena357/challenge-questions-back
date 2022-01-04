const express = require('express')
const { User, Level, Prize, Question, Answer } = require('../db.js')
const router = express.Router()

router.use(express.json())

//DATA LOADER
const {users, levels, prizes, questions, answers} = require('./data.js')

users.forEach(el => User.findOrCreate({
  where: {
    name: el.name,
    accum: el.accum,
    level_reached: el.level_reached,
    levelId: el.levelId,
    prizeId: el.prizeId
  }
}))

levels.forEach(el => Level.findOrCreate({
  where: {
    level: el.level
  }
}))

prizes.forEach(el => Prize.findOrCreate({
  where: {
    points: el.points,
    levelId: el.levelId
  }
}))

questions.forEach(el => Question.findOrCreate({
  where: {
    question: el.question,
    levelId: el.levelId
  }
}))

answers.forEach(el => Answer.findOrCreate({
  where: {
    answer: el.answer,
    is_correct: el.is_correct,
    questionId: el.questionId
  }
}))

module.exports = router