const express = require('express')
const cors = require("cors")
const app = express()
const port = 6000
require("dotenv").config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const usersRouter = require("./routes/users")

app.use("/", usersRouter)

app.use(cors())
app.use(express.json())


const connectDB = require("./db/connectDB")
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})