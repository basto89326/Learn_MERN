import { PlayersContext } from "../context/PlayerContext";
import { useContext } from "react";

// Hook to use the context in PlayerContext.js
export const usePlayersContext = () => {
    const context = useContext(PlayersContext)

    if (!context) {
        throw Error('usePlayerContext must be used inside a PlayersContextProvider')
    }

    return context
}