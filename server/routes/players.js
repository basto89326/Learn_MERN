const express = require('express')
const {
    getAllPlayers,
    getPlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
} = require('../controllers/playerController')

const router = express.Router()

// GET all players
router.get('/', getAllPlayers)

// GET a single player
router.get('/:id', getPlayer)

// POST a new player
router.post('/', createPlayer)

// DELETE a player
router.delete('/:id', deletePlayer)

// UPDATE a player
router.patch('/:id', updatePlayer)

// Export router
module.exports = router