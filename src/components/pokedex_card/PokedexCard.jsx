import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass.js";
import PikachuPlaceholder from "../../assets/images/pikachu-placeholder.png";

const PokedexCard = ({ className = "" }) => {
  return (
    <div className={addAdditionalClass(className, "pokedex-card")}>
      <div className='pokedex-card__card-img'>
        <img src={PikachuPlaceholder} alt='pokemon' />
      </div>
      <div className='pokedex-card__card-number'>№1</div>
      <div className='pokedex-card__card-name'>Pikachu</div>
      <ul className='pokedex-card__types-list'>
        <li className='pokedex-card__type-item'>
          <div className='pokedex-card__type'>Lightning</div>
        </li>
        <li className='pokedex-card__type-item'>
          <div className='pokedex-card__type'>Grass</div>
        </li>
      </ul>
    </div>
  );
};

export default PokedexCard;
