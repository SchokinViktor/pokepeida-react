import React from "react";
import PokedexHero from "./pokedex_hero/PokedexHero";
import PokedexSearch from "./pokedex_search/PokedexSearch";
import PokedexCards from "./pokedex_cards/PokedexCards";

const Pokedex = () => {
  return (
    <>
      <PokedexHero />
      <PokedexSearch />
      <PokedexCards/>
    </>
  );
};

export default Pokedex;
