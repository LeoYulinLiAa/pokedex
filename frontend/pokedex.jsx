import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store'
import { fetchAllPokemon } from "./util/api_util";
import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions"
import { selectAllPokemon } from "./reducers/selector"
import Root from "./components/root";


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);

  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon
});