import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PokemonCard from '../../../components/pokedex_card/PokedexCard';
import NoData from '../../../components/no_data/NoData';
import { leftSlideAnim } from '../../../utils/framerMotionAnims';
import { fetchEvolutionChain } from './fetchEvolutionChain';
import { PokemonDetailContext } from '../PokemonDetail';

const PokemonEvolution = () => {
  const { pokemonData, evolutionData, setEvolutionData, setEvolutionDataLoading } =
    useContext(PokemonDetailContext);
  const pokemonNames = [];
  const [isEvolutionChainExist, setIsEvolutionChainExist] = useState(true);

  useEffect(() => {
    setEvolutionDataLoading(true);
    setIsEvolutionChainExist(true);
    fetchEvolutionChain(
      pokemonData,
      pokemonNames,
      setEvolutionData,
      setIsEvolutionChainExist,
      setEvolutionDataLoading(false),
    );
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
                  to={`/pokemon/${item.id}`}>
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
    </div>
  );
};

export default PokemonEvolution;
