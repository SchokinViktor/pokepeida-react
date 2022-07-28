import React from "react";
import { useState } from "react";

import PokedexHero from "./pokedex_hero/PokedexHero";
import PokedexSearch from "./pokedex_search/PokedexSearch";
import PokedexCards from "./pokedex_cards/PokedexCards";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <>
      <PokedexHero />
      <PokedexSearch />
      <PokedexCards pokemonData={pokemonData} setPokemonData={setPokemonData} />
    </>
  );
};

export default Pokedex;
