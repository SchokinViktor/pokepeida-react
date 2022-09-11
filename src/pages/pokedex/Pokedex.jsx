import React, { useEffect, createContext } from 'react';
import { useState } from 'react';

import PokedexHero from './pokedex_hero/PokedexHero';
import PokedexSearch from './pokedex_search/PokedexSearch';
import PokedexCards from './pokedex_cards/PokedexCards';
import SplashScreen from '../../components/splash_screen/SplashScreen';
import getAllPokemons, { pokemonsLimit } from '../../utils/getAllPokemons';

export const PokedexContext = createContext();

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

  if (allPokemonData.length < pokemonsLimit) return <SplashScreen />;

  return (
    <>
      <PokedexHero />
      <PokedexContext.Provider
        value={{ pokemonData, setPokemonData, allPokemonData, setCardsPerPage, cardsPerPage }}>
        <PokedexSearch />
        <PokedexCards />
      </PokedexContext.Provider>
    </>
  );
};

export default Pokedex;
