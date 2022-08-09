import React from "react";
import { NavLink } from "react-router-dom";

import checkZero from "../../../utils/chekZero";
import { pokemonsLimit } from "../../../utils/fetchAllPokemons";
import { definePokemonSprite } from "../../../utils/definePokemonSprite";
import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";

const PokemonDetailmage = ({ pokemonData }) => {
  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>
        {checkZero(pokemonData.id)}
      </div>
      <div className='pokemon-detail-img__img-holder'>
        {definePokemonSprite(pokemonData, false)}
      </div>
      <div className='pokemon-return'></div>
      <div className='pokemon-detail-img__btns'>
        <NavLink
          to={
            pokemonData.id === 1
              ? `/pokedex/${pokemonsLimit}`
              : `/pokedex/${pokemonData.id - 1}`
          }
        >
          <ThreeDButton buttonText='PREV' />
        </NavLink>

        <NavLink
          to={
            pokemonData.id === pokemonsLimit
              ? `/pokedex/${1}`
              : `/pokedex/${pokemonData.id + 1}`
          }
        >
          <ThreeDButton buttonText='NEXT' />
        </NavLink>
      </div>
    </div>
  );
};

export default PokemonDetailmage;
