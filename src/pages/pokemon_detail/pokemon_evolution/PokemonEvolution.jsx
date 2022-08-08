import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import fetchData from "../../../utils/fetchData";
import PokemonCard from "../../../components/pokedex_card/PokedexCard";

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

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <div className='pokemon-evo'>
      <div className='pokemon-evo__evo-title'>Evolution</div>
      <ul className='pokemon-evo__list'>
        {evolutionData.map((item, i) => {
          return (
            <li key={i} className='pokedex-cards__card-item'>
              <Link
                style={{
                  width: `100%`,
                  textDecoration: `none`,
                  display: "flex",
                  justifyContent: "center",
                }}
                to={`/pokedex/${item.name}`}
              >
                <PokemonCard className="pokemon-evo__evo-card" typeBoxClass = {'pokemon-evo__type'} pokemon={item} />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* pokemon-evo__evo-card */}
    </div>
  );
};

export default PokemonEvolution;
