const express = require('express')
const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 3000
const app = express()

MongoClient.connect(`mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, db) => {
  if (err) {
    console.error.bind(console, 'connection error:')
  }

  console.log('connected to db!')
  let dbo = db.db(process.env.MONGO_DB_NAME)
  dbo.collection('kitten').insertOne({
    name: 'test kitten',
    color: 'blue'
  }, (err, res) => {
    if (err) {
      console.log('error inserting default item')
      throw err
    }

    console.log('1 record inserted')
    db.close()
  })
})

app.get('/', (req, res, next) => {
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})