const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Creating schema for players added to DB
const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Player', playerSchema)

// Get all players in the Players collection
//Player.find()