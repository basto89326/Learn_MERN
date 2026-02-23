const express = require('express')
const Player = require('../models/playerModel')
const router = express.Router()

// GET all players
router.get('/', (req, res) => {
    res.json({mssg: 'GET all players'})
})

// GET a single player
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single player'})
})

// POST a new player
// Using async and await because Player.create function is asynchronous
router.post('/', async(req, res) => {
    const {name, disposals, goals, votes} = req.body

    try {
        const player = await Player.create({name, disposals, goals, votes})
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a player
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a player'})
})

// UPDATE a player
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a player'})
})

// Export router
module.exports = router