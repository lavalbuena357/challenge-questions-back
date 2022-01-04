const express = require('express')
const { Answer } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//crear una respuesta
router.post('/', async (req, res) => {
  const {answer, is_correct, questionId} = req.body
  try {
    const newAnswer = await Answer.create({answer, is_correct, questionId})

    return res.json(newAnswer)
  } catch (err) {console.log(err)}
})

module.exports = router;