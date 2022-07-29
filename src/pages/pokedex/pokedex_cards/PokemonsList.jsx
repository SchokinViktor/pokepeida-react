import React from 'react'
import PokemonCard from '../../../components/pokedex_card/PokedexCard';

const PokemonsList = ({pokemonData}) => {
  return (
    <ul className='pokedex-cards__cards-list'>
    {pokemonData.map((item, i) => {
      return (
        <li key={i} className='pokedex-cards__card-item'>
          <PokemonCard className='' pokemon={item} />
        </li>
      );
    })}
  </ul>
  )
}

export default PokemonsList