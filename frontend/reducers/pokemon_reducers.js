import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions'

const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return {
                ...state, ...action.pokemon
            }
        case RECEIVE_SINGLE_POKEMON:
            const newState = { ...state };
            newState[action.pokemon.id] = action.pokemon;
            // newState.entities.pokemon[action.pokemon.id] = action.pokemon
            return newState;
        default:
            return state;
    }
}

export default pokemonReducer;