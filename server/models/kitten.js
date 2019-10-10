const mongoose = require('mongoose')
const kittenSchema = require('../schemas/kitten.js')

kittenSchema.methods.speak = function() {
  let greeting = (this.name) ? 
    `Meow! My name is ${this.name}` :
    'I don\'t have a name.'
  console.log(greeting)
}

module.exports = mongoose.model('Kitten', kittenSchema)