const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const controllersGame = require('./controllers/game')
const controllersKittens = require('./controllers/kittens')
require('dotenv').config()

// Connect to mongoDB
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB_NAME}`, 
  {useNewUrlParser: true, useUnifiedTopology: true})
const mongodb = mongoose.connection

mongodb.on('error', console.error.bind(console, 'connection error:'))
mongodb.once('open', function() {
  console.log('connected!')
})

// Game API
Object.keys(controllersGame).forEach((key) => {
  app.use('/game', controllersGame[key])
})

// Kittens API
Object.keys(controllersKittens).forEach((key) => {
  app.use('/kittens', controllersKittens[key])
})

// App
app.get('/', (req, res, next) => {
  res.send('Welcome to the Kittens API!')
})

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`)
})

