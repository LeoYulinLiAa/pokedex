import { combineReducers } from "redux";
import pokemonReducer from "./pokemon_reducers";
import itemReducer from "./item_reducers"

export const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    item: itemReducer,
  })

