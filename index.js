const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Green Nest server is running!!')
})

app.listen(port, () => {
  console.log(`Green Nest server is listening on port ${port}`)
})
