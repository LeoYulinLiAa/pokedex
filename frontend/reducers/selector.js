

export const selectAllPokemon = state => {
  return Object.values(state.entities.pokemon);
}

export const selectPokemonItem = (state, itemId) => {
  return state.entities.item[itemId]
}

export const selectAllItems = state => {
  return Object.values(state.entities.item);
}