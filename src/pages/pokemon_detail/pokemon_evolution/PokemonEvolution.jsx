import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

import PokemonCard from '../../../components/pokedex_card/PokedexCard';
import NoData from '../../../components/no_data/NoData';
import { leftSlideAnim } from '../../../utils/framerMotionAnims';

const PokemonEvolution = ({ pokemonData, evolutionData, setEvolutionData }) => {
  const pokemonNames = [];
  const [isEvolutionChainExist, setIsEvolutionChainExist] = useState(true);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`,
      );
      if (response.data.evolution_chain !== null) {
        const secondResponse = await axios.get(response.data.evolution_chain.url);

        pokemonNames.push(secondResponse.data.chain.species.name);
        if (secondResponse.data.chain.evolves_to.length !== 0) {
          pokemonNames.push(secondResponse.data.chain.evolves_to[0].species.name);

          if (secondResponse.data.chain.evolves_to[0].evolves_to.length !== 0) {
            pokemonNames.push(secondResponse.data.chain.evolves_to[0].evolves_to[0].species.name);
          }
        }
        const addNewEvolutionChain = async (pokemonName) => {
          await setEvolutionData([]);
          if (pokemonName !== null) {
            const thirdResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
            );
            await setEvolutionData((state) => {
              state = [...state, thirdResponse.data];
              state.sort((a, b) => (a.order > b.order ? 1 : -1));
              return state;
            });
          }
        };
        pokemonNames.forEach((name) => {
          addNewEvolutionChain(name);
        });
      } else setIsEvolutionChainExist(false);
    };

    setIsEvolutionChainExist(true);
    fetchEvolutionChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonData]);

  let animationDelay = 0;

  return (
    <div className='pokemon-evo'>
      <div className='pokemon-evo__evo-title'>Evolution</div>
      {isEvolutionChainExist ? (
        <ul className='pokemon-evo__list'>
          {evolutionData.map((item, i) => {
            ++animationDelay;
            return (
              <motion.li
                custom={animationDelay}
                initial='hidden'
                whileInView='visible'
                variants={leftSlideAnim}
                viewport={{ once: true }}
                key={i}
                className='pokedex-cards__card-item'>
                <Link
                  style={{
                    width: `100%`,
                    textDecoration: `none`,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  to={`/${item.id}`}>
                  <PokemonCard
                    className='pokemon-evo__evo-card'
                    typeBoxClass={'pokemon-evo__type'}
                    pokemon={item}
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      ) : (
        <NoData text={'No Evolution Data'} />
      )}

      {/* pokemon-evo__evo-card */}
    </div>
  );
};

export default PokemonEvolution;
