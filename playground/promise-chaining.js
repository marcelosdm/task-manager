require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d669db383e47c0c283dcaf7')
  .then(() => {
    return Task.countDocuments({ completed: false })
  })
  .then(result => console.log(result))
  .catch(e => console.log(e))

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: true })
  return count
}

deleteTaskAndCount('5d6886409cd69c1db70fb640')
  .then(count => console.log(`Completed tasks: ${count}`))
  .catch(e => console.log(e))
