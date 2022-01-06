const express = require('express')
const { Level, Prize, Question, Answer } = require('../db.js')
const router = express.Router()

router.use(express.json())

//DATA LOADER
const {levels, prizes, questions, answers} = require('./data.js')

levels.forEach(el => Level.create({level: el.level}))

prizes.forEach(el => Prize.create({
  
    points: el.points,
    levelId: el.levelId
 
}))

questions.forEach(el => Question.create({
  
    question: el.question,
    levelId: el.levelId
  
}))

answers.forEach(el => Answer.create({
  
    answer: el.answer,
    is_correct: el.is_correct,
    questionId: el.questionId
 
}))

module.exports = router