import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass.js";
import { definePokemonSprite } from "../../utils/definePokemonSprite.js";
import TypeBox from "../type_box/TypeBox.jsx";

const PokemonCard = ({ className = "", typeBoxClass, pokemon }) => {
  return (
    <div className={addAdditionalClass(className, "pokedex-card")}>
      <div className='pokedex-card__card-img'>{definePokemonSprite(pokemon)}</div>
      <div className='pokedex-card__card-number'>№{pokemon.id}</div>
      <div className='pokedex-card__card-name'>{pokemon.name}</div>
      <ul className='pokedex-card__types-list'>
        {pokemon.types.map((item, i) => {
          return (
            <li key={i} className='pokedex-card__type-item'>
              <TypeBox className={typeBoxClass} typeName={item.type.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonCard;
