const express = require('express')
const { Question, Answer } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//crear una pregunta
router.post('/', async (req, res) => {
  const {question, levelId} = req.body
  try {
    const newQuestion = await Question.create({question, levelId})

    return res.json(newQuestion)
  } catch (err) {console.log(err)}
})

//obtener todas las preguntas
router.get('/', async (req, res) => {
  try {
      let questions = await Question.findAll({
        include: {model: Answer, require: true}
      })
      return res.json(questions)
  } catch(err) {console.log(err)}
});

module.exports = router;