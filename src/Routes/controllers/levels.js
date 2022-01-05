const express = require('express')
const { Level, Prize, Question, Answer } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//obtener todos los niveles
router.get('/', async (req, res) => {
  try {
      let levels = await Level.findAll({
        include: [
          {model: Prize, require: true, attributes: ["id", "points"]},
          {
            model: Question, 
            require: true, 
            attributes: ["id", "question"],
            include: {model: Answer, require: true, attributes: ["id", "answer", "is_correct"] }
          }
        ]
      })
      return res.json(levels)
  } catch(err) {console.log(err)}
});

//obtener niveles por dificultar
router.get('/:level', async (req, res) => {
  const {level} = req.params 
  try {
      let levels = await Level.findAll({
        where: {level},
        include: [
          {model: Prize, require: true, attributes: ["id", "points"]},
          {
            model: Question, 
            require: true, 
            attributes: ["id", "question"],
            include: {model: Answer, require: true, attributes: ["id", "answer", "is_correct"] }
          }
        ]
      })
      return res.json(levels)
  } catch(err) {console.log(err)}
});

//crear un nivel
router.post('/', async (req, res) => {
  const {level} = req.body
  try {
    const newLevel = await Level.create({level})

    return res.json(newLevel)
  } catch (err) {console.log(err)}
})


module.exports = router;