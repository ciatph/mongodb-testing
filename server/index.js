const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const controllers = require('./controllers')
require('dotenv').config()

// Connect to mongoDB
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB_NAME}`, 
  {useNewUrlParser: true, useUnifiedTopology: true})
const mongodb = mongoose.connection

mongodb.on('error', console.error.bind(console, 'connection error:'))
mongodb.once('open', function() {
  console.log('connected!')
})

// API
Object.keys(controllers).forEach((key) => {
  app.use('/api', controllers[key])
})

// App
app.get('/', (req, res, next) => {
  res.send('Welcome to the Kittens API!')
})

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`)
})

