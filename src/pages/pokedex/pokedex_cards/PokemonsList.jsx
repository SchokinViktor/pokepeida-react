import React from "react";
import { Link } from "react-router-dom";

import PokemonCard from "../../../components/pokedex_card/PokedexCard";
import Loader from "../../../components/loader/Loader";
import { addAdditionalClass } from "../../../utils/addAdditionalClass";

const PokemonsList = ({ pokemonData, listClassName = "", className = "" }) => {
  console.log(pokemonData);
  if (!pokemonData) return <Loader />;

  console.log(pokemonData);

  return (
    <ul
      className={addAdditionalClass(listClassName, "pokedex-cards__cards-list")}
    >
      {pokemonData.map((item, i) => {
        return (
          <li key={i} className='pokedex-cards__card-item'>
            <Link
              style={{
                width: `100%`,
                textDecoration: `none`,
                display: "flex",
                justifyContent: "center",
              }}
              to={`/pokedex/${item.id}`}
            >
              <PokemonCard className={className} pokemon={item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonsList;
