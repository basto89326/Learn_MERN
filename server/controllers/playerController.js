const Player = require('../models/playerModel')
const mongoose = require('mongoose')

// Get all players, sorted by date created (newest first)
// Using async and await because Player.find function is asynchronous
const getAllPlayers = async(req, res) => {
    const players = await Player.find({}).sort({createdAt: -1})

    res.status(200).json(players)
}

// Get a single player
const getPlayer = async(req, res) => {
    const { id } = req.params

    // Checking that id is a valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID'})
    }

    const player = await Player.findById(id)

    if (!player) {
        return res.status(404).json({error: 'No such player exists'})
    }

    res.status(200).json(player)
}

// Create new player
const createPlayer = async(req, res) => {
    const {name, disposals, goals, votes} = req.body

    // Add doc to database
    try {
        const player = await Player.create({name, disposals, goals, votes})
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a player


// Update a player


module.exports = {
    getAllPlayers,
    getPlayer,
    createPlayer
}