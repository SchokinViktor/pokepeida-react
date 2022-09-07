import React, { useEffect } from 'react';
import { useState } from 'react';

import PokedexHero from './pokedex_hero/PokedexHero';
import PokedexSearch from './pokedex_search/PokedexSearch';
import PokedexCards from './pokedex_cards/PokedexCards';
import SplashScreen from '../../components/splash_screen/SplashScreen';
import getAllPokemons, { pokemonsLimit } from '../../utils/getAllPokemons';

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [allPokemonData, setAllPokemonData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    getAllPokemons(setAllPokemonData);
  }, []);

  // useEffect(() => {
  //   setPokemonData(allPokemonData);
  // }, [allPokemonData]);

  if (allPokemonData.length < pokemonsLimit) return <SplashScreen />;

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
