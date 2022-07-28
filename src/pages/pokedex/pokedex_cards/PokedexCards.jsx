import React from "react";

import PokedexCard from "../../../components/pokedex_card/PokedexCard";

const PokedexCards = () => {
  return (
    <section className='pokedex-cards'>
      <div className='container'>
        <ul className='pokedex-cards__cards-list'>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          <li className='pokedex-cards__card-item'>
            <PokedexCard />
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default PokedexCards;
