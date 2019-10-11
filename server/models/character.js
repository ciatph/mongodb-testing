const mongoose = require('mongoose')

// Character Schema
const characterSchema = new mongoose.Schema({
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

// Methods
characterSchema.methods.getStats = function() {
  console.log(`New character ${this.class} - ${this.name} created!`)
  return this.stats
}

characterSchema.methods.levelUp = function(points) {
  Object.keys(this.stats).forEach((key) => {
    this.stats[key] += points
  })
}

characterSchema.methods.receiveDamage = function(dmg) {
  this.stats.vitality -= dmg
  console.log(`-- received DMG vitality: ${this.stats.vitality}`)
}

module.exports = mongoose.model('character', characterSchema)