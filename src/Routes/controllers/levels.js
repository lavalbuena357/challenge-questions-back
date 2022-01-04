const express = require('express')
const { Level, Prize, User } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//obtener todos los niveles
router.get('/', async (req, res) => {
  try {
      let levels = await Level.findAll({
        include: [{model: Prize, require: true}, {model: User, require: true}]
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