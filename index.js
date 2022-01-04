require('dotenv').config()
const server = require('./src/app.js')
const { conn } = require('./src/db.js')

const {PORT} = process.env

conn.sync({ force: false })
.then(() => {
  server.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
  })
})
.catch(err => console.log(err))
