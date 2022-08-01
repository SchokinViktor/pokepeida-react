import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonEvolution from "./pokemon_evolution/PokemonEvolution";
import PokemonInfo from "./pokemon_info/PokemonInfo";

import fetchData from "../../utils/fetchData";
import { Context } from "./PokemonDetailContext";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const { id } = useParams();
  

  
//
  useEffect(() => {
  
    
    const getPokemonData = async () => {
      const result = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonData(result.data);
      
      console.log(pokemonData);
      //console.log(result.data.sprites.other['official-artwork'].front_default);
    };
    getPokemonData();

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <Context.Provider
      value={{
        pokemonData,
      }}
    >
      <section className='pokemon-detail'>
        <div className='pokemon-detail__container container'>
          <PokemonInfo className='pokemon-detail__pokemon-info' />
          <div className='pokemon-detail__img-holder'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              // src={`result.data.sprites.other['official-artwork'].front_default`}
              alt={pokemonData.name}
            />
          </div>
          <PokemonEvolution />
        </div>
      </section>
    </Context.Provider>
  );
};

export default PokemonDetail;
