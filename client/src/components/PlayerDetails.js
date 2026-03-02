const PlayerDetails = ({ player }) => {
    return (
        <div className="workout-details">
            <h4>{player.name}</h4>
            <p><strong>Team: </strong>{player.team}</p>
            <p><strong>Brownlow Votes: </strong>{player.votes}</p>
            <p>{player.createdAt}</p>
        </div> 
    )
}

export default PlayerDetails