import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({ pokemon }) => {
  return <Link to={`/pokemon/${pokemon.id}`}>
    <li>
      name: { pokemon.name }
      <img src={ pokemon.image_url } height="100" width="100"/>
    </li>
  </Link>
}

export default PokemonIndexItem;