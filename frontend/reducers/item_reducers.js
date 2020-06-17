import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_SINGLE_POKEMON:
            const newState = { ...state, ...action.pokemon.items }
            return newState
        default:
            return state;
    }
}

export default itemsReducer;