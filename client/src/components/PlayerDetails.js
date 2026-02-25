const PlayerDetails = ({ player }) => {
    return (
        <div className="workout-details">
            <h4>{player.name}</h4>
            <p><strong>Disposals: </strong>{player.disposals}</p>
            <p><strong>Goals: </strong>{player.goals}</p>
            <p><strong>Brownlow Votes: </strong>{player.votes}</p>
            <p>{player.createdAt}</p>
        </div> 
    )
}

export default PlayerDetails