import { useEffect, useState } from "react"

// components
import PlayerDetails from '../components/PlayerDetails'

const Home = () => {
    const [players, setPlayers] = useState(null)

    useEffect(() => {
        const fetchPlayers = async() => {
            const response = await fetch('/api/players')  // backend localhost port has been proxied in package.json file
            const json = await response.json()  // json = array of data
            
            if (response.ok) {
                setPlayers(json)  // From getAllPlayers controller
            }
        }

        fetchPlayers()
    }, [])  // Empty array as second argument ensures that useEffect only fires once


    return (
        <div className="home">
            <div className="players">
                {players && players.map((player) => (  // Only run if players is not null
                    <PlayerDetails key={player._id} player={player} />
                ))}
            </div>
        </div>
    )
}

export default Home