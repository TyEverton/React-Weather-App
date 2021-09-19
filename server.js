const express = require ('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../src')))

app.use('/index.css', express.static(path.join(__dirname, '/src/index.css')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 5915 

app.listen(port, () => {
  console.log(`Server rocking out to ${port}`)
})