const express = require('express')
const Kitten = require('../models/kitten')
const kittenController = express.Router()

kittenController.get('/create/:name/:color', ({
  params: {
    name, 
    color
  }
}, res) => {
  let kitten = new Kitten({
    name: name,
    color: color
  })

  kitten.save((err, __kitten) => {
    if (err) {
      res.status(401).send({
        status: 'error saving kitten'
      })
    }

    res.status(200).send({
      kitten: {
        name: __kitten.name,
        color: __kitten.color
      }
    })
  })
})


kittenController.get('/list', (req, res) => {
  Kitten.find((err, kittens) => {
    if (err) {
      res.status(401).send('Error retrieving data')
    }

    res.status(200).send(kittens)
  })
})

module.exports = kittenController