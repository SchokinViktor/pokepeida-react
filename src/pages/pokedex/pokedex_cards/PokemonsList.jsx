import React from "react";
import { Link } from "react-router-dom";

import PokemonCard from "../../../components/pokedex_card/PokedexCard";
import Loader from "../../../components/loader/Loader";

const PokemonsList = ({ pokemonData, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <ul className='pokedex-cards__cards-list'>
        {pokemonData.map((item, i) => {
          return (
            <li key={i} className='pokedex-cards__card-item'>
              <Link style={{width: `100%`, textDecoration: `none`, display: 'flex', justifyContent: 'center'}} to={`/pokedex/${item.id}`}>
                <PokemonCard className='' pokemon={item} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default PokemonsList;
