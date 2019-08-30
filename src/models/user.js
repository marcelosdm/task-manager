const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User