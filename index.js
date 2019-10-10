const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send('okay')
})

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`)
})

