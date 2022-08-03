import React, { useEffect } from "react";
import { useState } from "react";
import fetchData from "../../../utils/fetchData";
import PokemonsList from "../../pokedex/pokedex_cards/PokemonsList";

const PokemonEvolution = ({ pokemonData}) => {
  const [isLoading, setLoading] = useState(true);
  const [evolutionData, setEvolutionData] = useState([]);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      const response = await fetchData(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`
      );
      const secondResponse = await fetchData(response.data.evolution_chain.url);
      const firstName = await secondResponse.data.chain.species.name;
      const secondName = await secondResponse.data.chain.evolves_to[0].species
        .name;
      const thirdName = await secondResponse.data.chain.evolves_to[0]
        .evolves_to[0].species.name;

      const addNewEvolutionChain = async (pokemonName) => {
        const thirdResponse = await fetchData(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setEvolutionData((state) => {
          state = [...state, thirdResponse.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      };
      addNewEvolutionChain(firstName);
      addNewEvolutionChain(secondName);
      addNewEvolutionChain(thirdName);
    };
    fetchEvolutionChain();
    setLoading(false);
  }, []);
  //

  if (!evolutionData || isLoading) return <div>Loading...</div>;
  


  return (
    <div className='pokemon-evo'>
      <div className='pokemon-evo__evo-title'>Evolution</div>
      <PokemonsList pokemonData={evolutionData} listClassName = 'pokemon-evo__list' className = 'pokemon-evo__evo-card'/>
    </div>
  );
};

export default PokemonEvolution;
