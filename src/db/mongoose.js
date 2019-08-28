const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = `mongodb://mmelo_dev:solhi1986@ds145563.mlab.com:45563/task-app`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('You must enter a valid email')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate (value) {
      if (value === 'password') {
        throw new Error(`Your password can't have the word 'password' in it`)
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate (value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = User({
  name: '         Marcelo',
  email: 'MARCELO@MELO.IO',
  age: 32,
  password: '123456'
})

me.save()
  .then(() => console.log(me))
  .catch(error =>
    console.log('An error occured. Please take a look on it!', error)
  )

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const task = Task({
  description: 'Sleep'
})

task
  .save()
  .then(() => console.log(task))
  .catch(error => console.log(error))

// const task = new Task({
//   description: 'Get hired by LuizaLabs',
//   completed: true
// })

// task
//   .save()
//   .then(() => console.log(task))
//   .catch(error => console.log(error))
