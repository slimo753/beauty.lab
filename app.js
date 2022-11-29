const path = require('path')
const express = require('express')
const app = express()

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

app.use(express.static('styles'))


app.get('/', function (req, res) {
  res.sendFile(createPath('index'))
})

app.listen(3000)