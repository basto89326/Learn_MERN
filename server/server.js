// Attach .env variables to process object
require('dotenv').config()

// Setting up express app
const express = require('express')
const app = express()

// Middleware - log incoming requests 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// Listen for requests (hiding port no)
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
