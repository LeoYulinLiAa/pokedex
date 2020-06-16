import { combineReducers } from "redux";
import pokemonReducer from "./pokemon_reducers";

export const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
  })

