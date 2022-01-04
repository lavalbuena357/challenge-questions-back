const express = require('express')
const { Prize } = require('../../db.js')
const router = express.Router()

router.use(express.json())

//crear premio
router.post('/', async (req, res) => {
  const {points, levelId} = req.body
  try {
    const newPrize = await Prize.create({points, levelId})

    return res.json(newPrize)
  } catch (err) {console.log(err)}
})


module.exports = router;