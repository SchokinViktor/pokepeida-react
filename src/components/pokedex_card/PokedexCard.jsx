import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass.js";

const PokemonCard = ({ className = "", pokemon }) => {
  return (
    <div className={addAdditionalClass(className, "pokedex-card")}>
      <div className='pokedex-card__card-img'>
        {/* <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        /> */}
        {/* <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} /> */}
        <img
          className="pokedex-card__img-anim"
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={pokemon.name}
        />
      </div>
      <div className='pokedex-card__card-number'>№{pokemon.id}</div>
      <div className='pokedex-card__card-name'>{pokemon.name}</div>
      <ul className='pokedex-card__types-list'>
        {pokemon.types.map((item, i) => {
          return (
            <li key={i} className='pokedex-card__type-item'>
              <div className='pokedex-card__type'>{item.type.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonCard;
