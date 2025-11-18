// Attach .env variables to process object
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const playerRoutes = require('./routes/players')

// Setting up express app
const app = express()

// Middleware 
app.use(express.json())

    // Log incoming requests 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Using routes from playerRoutes 
// IMPORTANT: playerRoutes add on /api/players to the start of paths
app.use('/api/players', playerRoutes)

// Connect to DB 
// .then fires function when connected, and .catch catches any errors
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // Listen for requests only once connected to DB
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB, listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
