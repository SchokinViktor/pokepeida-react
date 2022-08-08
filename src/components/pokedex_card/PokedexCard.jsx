import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass.js";
import TypeBox from "../type_box/TypeBox.jsx";

const PokemonCard = ({ className = "", typeBoxClass ,pokemon }) => {
  return (
    <div className={addAdditionalClass(className, "pokedex-card")}>
      <div className='pokedex-card__card-img'>
        {pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default !== null ? (
          <img
            className='pokedex-card__img-anim'
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt={pokemon.name}
          />
        ) : (
          <img
            className='pokedex-card__img-anim'
            src={
              pokemon.sprites.versions["generation-v"]["black-white"]
                .front_default
            }
            alt={pokemon.name}
          />
        )}
      </div>
      <div className='pokedex-card__card-number'>№{pokemon.id}</div>
      <div className='pokedex-card__card-name'>{pokemon.name}</div>
      <ul className='pokedex-card__types-list'>
        {pokemon.types.map((item, i) => {
          return (
            <li key={i} className='pokedex-card__type-item'>
              <TypeBox className = {typeBoxClass} typeName={item.type.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonCard;
