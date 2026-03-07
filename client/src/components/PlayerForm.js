import { useState } from "react"
import { usePlayersContext } from "../hooks/usePlayersContext"

const PlayerForm = () => {
    const { dispatch } = usePlayersContext()

    const [name, setName] = useState('')
    const [team, setTeam] = useState('')
    const [votes, setVotes] = useState('')
    const [error, setError] = useState(null)

    // e = event object
    const handleSubmit = async(e) => {
        e.preventDefault()  // Default action is refresh - don't want that

        const player = {name, team, votes}

        const response = await fetch('/api/players', {
            method: 'POST',
            body: JSON.stringify(player),  // Changes player object into json
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()  // Wait until createPlayer function is finished

        if (!response.ok) {
            setError(json.error)
        } else {
            setName('')
            setTeam('')
            setVotes('')
            setError(null)
            console.log('New player added', json)
            dispatch({type: 'CREATE_PLAYER', payload: json})
        }
        
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Player</h3>

            <label>Player Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Player Team:</label>
            <input 
                type="text"
                onChange={(e) => setTeam(e.target.value)}
                value={team}
            />

            <label>Total Votes:</label>
            <input 
                type="number"
                onChange={(e) => setVotes(e.target.value)}
                value={votes}
            />
            
            <button>Add Player</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PlayerForm