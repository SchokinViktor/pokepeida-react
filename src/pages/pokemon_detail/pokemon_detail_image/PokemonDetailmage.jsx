import React from "react";
import { NavLink } from "react-router-dom";

import checkZero from "../../../utils/chekZero";
import { pokemonsLimit } from "../../../utils/fetchAllPokemons";
import "react-lazy-load-image-component/src/effects/opacity.css";

const PokemonDetailmage = ({ pokemonData }) => {
  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>
        {checkZero(pokemonData.id)}
      </div>
      <div className='pokemon-detail-img__img-holder'>
        <img
          effect='blur'
          height='500px'
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemonData.name}
        />
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
          <button className='pokemon-detail-img__btn pokemon-detail-img__btn_left'>
            Prev
          </button>
        </NavLink>

        <NavLink
          to={
            pokemonData.id === pokemonsLimit
              ? `/pokedex/${1}`
              : `/pokedex/${pokemonData.id + 1}`
          }
        >
          <button className='pokemon-detail-img__btn pokemon-detail-img__btn_right'>
            Next
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PokemonDetailmage;
