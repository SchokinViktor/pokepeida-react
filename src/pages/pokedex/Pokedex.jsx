import React, { useEffect } from "react";
import { useState } from "react";

import PokedexHero from "./pokedex_hero/PokedexHero";
import PokedexSearch from "./pokedex_search/PokedexSearch";
import PokedexCards from "./pokedex_cards/PokedexCards";
import FetchAllPokemons from "../../utils/fetchAllPokemons";
import Loader from "../../components/loader/Loader";

const Pokedex = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    FetchAllPokemons(setAllPokemonData);
  }, []);

  useEffect(() => {
    setPokemonData(allPokemonData);
  }, [allPokemonData]);

  

  return (
    <>
      <PokedexHero />
      <PokedexSearch
        allPokemonData={allPokemonData}
        setPokemonData={setPokemonData}
        pokemonData = {pokemonData}
      />
      <PokedexCards pokemonData={pokemonData} />
    </>
  );
};

export default Pokedex;
