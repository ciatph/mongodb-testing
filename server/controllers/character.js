const express = require('express')
const Character = require('../models/character')
const { CLASSES, BASE_STATS } = require('../constants/defines')
const characterController = express.Router()

// Create a new character
characterController.get('/game/:charclass/:name/create', ({
  params: {
    name,
    charclass 
  },
  query: {
    server,
    guild
  }
}, res) => {
  if (CLASSES[charclass.toUpperCase()]) {
    let character = new Character({
      name: name,
      class: charclass,
      level: 1,
      server: server,
      guild: guild,
      stats: BASE_STATS[charclass.toUpperCase()],
    })

    character.save((err, __character) => {
      if (err) {
        res.status(401).send('Error saving to DB')
      }
      res.status(200).send(__character)
    })  
  } else {
    res.status(401).send('Not a valid query')
  }
})


// List all characters
characterController.get('/game/list', (req, res) => {
  Character.find((err, __characters) => {
    if (err) {
      res.status(401).send('Error fetching data.')
    }
    res.status(200).send(__characters)
  })
})

// Find a Character by name
characterController.get('/game/:charclass/:name', ({
  params: {
    charclass,
    name
  }
}, res) => {
  Character.findOne({class: charclass, name: name}, (err, __character) => {
    if (err) {
      res.status(401).send('Error fetching data.')
    }
    res.status(200).send((__character) ? __character : {})
  })
})


// Damage the Character's Vitality
characterController.get('/game/:charclass/:name/dmg/:points', ({
  params: {
    charclass,
    name,
    points
  }
}, res) => {
  res.status(200).send(`Deducting ${points} from HP`)
})

module.exports = characterController