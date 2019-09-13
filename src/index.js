const express = require('express')
require('./db/mongoose')
const bcrypt = require('bcryptjs')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || '3000'

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const myFunction = async () => {
  const pass = '123456'
  const hashedPass = await bcrypt.hash(pass, 8)

  console.log(pass)
  console.log(hashedPass)

  const isMatch = await bcrypt.compare('123456', hashedPass)
  console.log(isMatch)
}

myFunction()

app.listen(port, () => console.log(`Server up on port: ${port}`))
