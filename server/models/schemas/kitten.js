const mongoose = require('mongoose')
const Kitten = new mongoose.Schema({
  name: String,
  color: String,
})

module.exports = Kitten