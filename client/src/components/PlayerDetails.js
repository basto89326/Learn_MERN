import { usePlayersContext } from '../hooks/usePlayersContext'

const PlayerDetails = ({ player }) => {
    const { dispatch } = usePlayersContext()

    const handleClick = async() => {
        const response = await fetch('/api/players/' + player._id, {  // Concatenated player id to end of string
            method: 'DELETE'
        })
        
        const json = await response.json()  // json = document to be deleted
        
        if (response.ok) {
            dispatch({type: 'DELETE_PLAYER', payload: json})
        }
    }
    
    return (
        <div className="workout-details">
            <h4>{player.name}</h4>
            <p><strong>Team: </strong>{player.team}</p>
            <p><strong>Brownlow Votes: </strong>{player.votes}</p>
            <p>{player.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div> 
    )
}

export default PlayerDetails