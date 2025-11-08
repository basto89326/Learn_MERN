// Attach .env variables to process object
require('dotenv').config()

const express = require('express')
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

// Listen for requests (hiding port no)
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
