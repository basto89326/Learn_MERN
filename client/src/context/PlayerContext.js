import { createContext, useReducer } from 'react'

// React contexts are used to provide global state to components instead of using local state
export const PlayersContext = createContext()

export const playersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return {
                players: action.payload
            }
        
        case 'CREATE_PLAYER':
            return {
                players: [action.payload, ...state.players]
            }

        default:
            return state
    }
}

// children property = whatever was wrapped inside PlayersContextPovider in index.js (in this case App)
export const PlayersContextProvider = ({ children }) => {
    // useReducer hook is similar to useState, but is more useful when next state depends on 
    // previous one, or when state updates involve multiple related values

    // state object is the {players: null} object below, which will change over time
    // dispatch function updates state using playersReducer function above
    const [state, dispatch] = useReducer(playersReducer, {
        players: null
    })
    
    return (
        <PlayersContext.Provider value={{...state, dispatch}}>
            { children }
        </PlayersContext.Provider>
    )
}