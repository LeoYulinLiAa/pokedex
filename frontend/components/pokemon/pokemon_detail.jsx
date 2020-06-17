import React from 'react';
import { Link, Route } from "react-router-dom";
import ItemDetailContainer from "../../components/items/item_detail_container"

export default class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    const pid = this.props.match.params.pokemonId;
    const { name, poke_type, attack, defense, moves, image_url } = this.props.pokemon;
    const { items } = this.props
    debugger;
    return !!items && (
      <div className="details">
        <img src={image_url} alt={name}/>
        <h2>{name}</h2>
        <p>Type: {poke_type}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Moves: {moves.join(", ")}</p>
        <ul>
            {items.filter(item => item.pokemon_id == pid).map(item =>
                <li>
                <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
                  <img src={item.image_url} alt={item.name} height="100" width="100"/>
                </Link>
                </li>
            )}
        </ul>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </div>
    );
  }

}