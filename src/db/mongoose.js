const mongoose = require('mongoose')

const connectionURL = `mongodb://mmelo_dev:solhi1986@ds145563.mlab.com:45563/task-app`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})
