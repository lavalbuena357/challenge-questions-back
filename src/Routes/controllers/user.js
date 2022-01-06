const express = require('express')
const { User } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
      let users = await User.findAll({
		  attributes: ["id", "name", "accum", "level_reached"]
	  })
      return res.json(users)
  } catch(err) {console.log(err)}
});

//obtener usuario por id
router.get('/:id', async (req, res) => {
	const {id} = req.params
  try {
      let user = await User.findByPk(id)
      return res.json(user)
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

//modificar los datos del usuario
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const {name, accum, level_reached, levelId, prizeId} = req.body

  const userUpdate = {name, accum, level_reached, levelId, prizeId}

  const user = await User.findByPk(id)
  
  for (const key in user.dataValues) {
    if (userUpdate[key]) {
      user[key] = userUpdate[key];
    }
  }

  await user.save();
  return res.send(user);

})


module.exports = router;