import React, { useEffect } from "react";
import { useState } from "react";

import fetchData from "../../../utils/fetchData";
import PokemonsList from "../../pokedex/pokedex_cards/PokemonsList";

const PokemonEvolution = ({ pokemonData, evolutionData, setEvolutionData }) => {
  
  const pokemonNames = [];

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      const response = await fetchData(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`
      );
      const secondResponse = await fetchData(response.data.evolution_chain.url);
      

      pokemonNames.push(secondResponse.data.chain.species.name);

      if (secondResponse.data.chain.evolves_to.length !== 0) {
        pokemonNames.push(secondResponse.data.chain.evolves_to[0].species.name);

        if (secondResponse.data.chain.evolves_to[0].evolves_to.length !== 0) {
          pokemonNames.push(
            secondResponse.data.chain.evolves_to[0].evolves_to[0].species.name
          );
        }
      }

      const addNewEvolutionChain = async (pokemonName) => {
        if (pokemonName !== null) {
          const thirdResponse = await fetchData(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          setEvolutionData((state) => {
            state = [...state, thirdResponse.data];
            state.sort((a, b) => (a.order > b.order ? 1 : -1));
            return state;
          });
        }
      };
      pokemonNames.forEach((name) => {
        addNewEvolutionChain(name);
      });
    };
    setEvolutionData([]);
    fetchEvolutionChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonData]);

  

  return (
    <div className='pokemon-evo'>
      <div className='pokemon-evo__evo-title'>Evolution</div>
      <PokemonsList
        pokemonData={evolutionData}
        listClassName='pokemon-evo__list'
        className='pokemon-evo__evo-card'
      />
    </div>
  );
};

export default PokemonEvolution;
