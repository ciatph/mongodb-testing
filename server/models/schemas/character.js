const mongoose = require('mongoose')
const Character = new mongoose.Schema({
  name: String,
  class: String,
  level: Number,
  server: String,
  guild: String,
  stats: {
    strength: Number,
    vitality: Number,
    energy: Number,
    agility: Number
  }
})

module.exports = Character