const express = require('express')
const {
    getAllPlayers,
    getPlayer,
    createPlayer
} = require('../controllers/playerController')

const router = express.Router()

// GET all players
router.get('/', getAllPlayers)

// GET a single player
router.get('/:id', getPlayer)

// POST a new player
router.post('/', createPlayer)

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