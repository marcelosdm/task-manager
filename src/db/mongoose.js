const mongoose = require('mongoose')

const connectionURL = `mongodb://mmelo_dev:solhi1986@ds145563.mlab.com:45563/task-app`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    validate (value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = User({
  name: 'Marcelo'
})

me.save()
  .then(() => console.log(me))
  .catch(error =>
    console.log('An error occured. Please take a look on it!', error)
  )

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

// const task = new Task({
//   description: 'Get hired by LuizaLabs',
//   completed: true
// })

// task
//   .save()
//   .then(() => console.log(task))
//   .catch(error => console.log(error))
