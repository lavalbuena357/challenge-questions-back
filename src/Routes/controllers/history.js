const express = require('express')
const {History, User} = require('../../db.js')
const router = express.Router()

router.use(express.json())

//obtener todo el historial
router.get('/', async (req, res) => {
  try {
      let history = await History.findAll({
          include: {model: User, require: true}
      })
      return res.json(history)
  } catch(err) {console.log(err)}
});

//guardar historial de juego
router.post('/', async (req, res) => {
  const {date, userId} = req.body
  try {
    const newHistory = await History.create({date, userId})

    return res.json(newHistory)
  } catch (err) {console.log(err)}
})

module.exports = router;