import React from "react";
import { useState } from "react";

import PokedexHero from "./pokedex_hero/PokedexHero";
import PokedexSearch from "./pokedex_search/PokedexSearch";
import PokedexCards from "./pokedex_cards/PokedexCards";
import { Context } from "./pokedexContext";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <Context.Provider
      value={{
        pokemonData,
        setPokemonData,
        inputValue,
        setInputValue,
      }}
    >
      <PokedexHero />
      <PokedexSearch/>
      <PokedexCards />
    </Context.Provider>
  );
};

export default Pokedex;
