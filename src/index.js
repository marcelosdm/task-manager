const express = require('express')
require('./db/mongoose')
const jwt = require('jsonwebtoken')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || '3000'

// app.use((req, res, next) => {
//   req.method === 'GET' ? res.send('GET requests are disabled') : next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismysecret', {
    expiresIn: '7 days'
  })
  console.log('Token ', token)

  const data = jwt.verify(token, 'thisismysecret')
  console.log(data)
}

myFunction()

app.listen(port, () => console.log(`Server up on port: ${port}`))
