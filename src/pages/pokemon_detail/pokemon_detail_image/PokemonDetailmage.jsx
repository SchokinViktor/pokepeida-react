import React from "react";

import checkZero from "../../../utils/chekZero";

const PokemonDetailmage = ({ pokemonData }) => {
  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>
        {checkZero(pokemonData.id)}
      </div>
      <div className='pokemon-detail-img__img-holder'>
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemonData.name}
        />
      </div>
      <div className='pokemon-detail-img__btns'>
        <button className='pokemon-detail-img__btn pokemon-detail-img__btn_left'>
          Prev
        </button>
        <button className='pokemon-detail-img__btn pokemon-detail-img__btn_right'>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonDetailmage;
