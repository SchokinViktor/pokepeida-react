import React, { useEffect } from "react";
import { useState } from "react";

import PokedexHero from "./pokedex_hero/PokedexHero";
import PokedexSearch from "./pokedex_search/PokedexSearch";
import PokedexCards from "./pokedex_cards/PokedexCards";
import FetchAllPokemons from "../../utils/fetchAllPokemons";

const Pokedex = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [cardsPerPage, setCardsPerPage] = useState(12);

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
        setCardsPerPage={setCardsPerPage}
      />
      <PokedexCards
        pokemonData={pokemonData}
        setCardsPerPage={setCardsPerPage}
        cardsPerPage={cardsPerPage}
      />
    </>
  );
};

export default Pokedex;
