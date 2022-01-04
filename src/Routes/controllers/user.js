const express = require('express')
const { User } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
      let users = await User.findAll()
      return res.json(users)
  } catch(err) {console.log(err)}
});

//crear usuario
router.post('/', async (req, res) => {
  const {name, accum, level_reached, levelId, prizeId} = req.body
  try {
    const newUser = await User.create({name, accum, level_reached, levelId, prizeId})

    return res.json(newUser)
  } catch (err) {console.log(err)}
})


module.exports = router;