const express = require('express')
const app = express()
const logger = require('./logger')
var morgan = require('morgan')

// app.use(logger)
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About page')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})