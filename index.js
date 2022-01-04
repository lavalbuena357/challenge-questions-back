require('dotenv').config()
const server = require('./src/app.js')

const {PORT} = process.env

server.listen(PORT, () => {
  console.log(`server listening at ${PORT}`)
})
