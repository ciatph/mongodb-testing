const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

const Kitten = require('./models/kitten.js')

// Connect to mongoDB
mongoose.connect(`mongodb://localhost/test`, {useNewUrlParser: true, useUnifiedTopology: true})
const mongodb = mongoose.connection

mongodb.on('error', console.error.bind(console, 'connection error:'))
mongodb.once('open', function() {
  console.log('connected!')
})

// App
app.get('/', (req, res, next) => {
  res.send('Welcome to the Kittens API!')
})

app.get('/create/:name/:color', (req, res, next) => {
  const {
    params: {
      name,
      color,
    }
  } = req

  // Create a new Kitten
  let kitty = new Kitten({
    name: name,
    color: color,
  })

  // Save the Kitten
  kitty.save(function(err, __kitty) {
    if (err) {
      res.status(401).send({
        status: 'error',
      })
    }
    __kitty.speak()
    res.status(200).send({
      kitten: {
        name: __kitty.name,
        color: __kitty.color,
      }
    })    
  })
})


// List all Kittens
app.get('/list', (req, res, next) => {
  Kitten.find((err, kittens) => {
    if (err) {
      res.status(401).send({
        status: 'error',
      })     
    }
    res.status(200).send(kittens)
  })
})

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`)
})

