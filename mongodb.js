const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const databaseName = 'task-app'
const connectionURL = `mongodb://mmelo_dev:solhi1986@ds145563.mlab.com:45563/${databaseName}`

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.warn('Unable to connect to database!')
    }
    console.log('Connected to database!')

    const db = client.db(databaseName)

    db.collection('tasks')
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
)
