const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

// Connect to mongoDB
mongoose.connect(`mongodb://localhost/test`, {useNewUrlParser: true, useUnifiedTopology: true})
const mongodb = mongoose.connection

mongodb.on('error', console.error.bind(console, 'connection error:'))
mongodb.on('open', function() {
  console.log('connected!')
})

// App
app.get('/', (req, res, next) => {
  res.send('okay')
})

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`)
})

