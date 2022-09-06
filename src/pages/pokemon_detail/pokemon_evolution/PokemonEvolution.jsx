import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PokemonCard from '../../../components/pokedex_card/PokedexCard';
import NoData from '../../../components/no_data/NoData';
import { leftSlideAnim } from '../../../utils/framerMotionAnims';
import Loader from '../../../components/loader/Loader';
import { fetchEvolutionChain } from './fetchEvolutionChain';
import SplashScreen from '../../../components/splash_screen/SplashScreen';

const PokemonEvolution = ({
  pokemonData,
  evolutionData,
  setEvolutionData,
  loading,
  setLoading,
}) => {
  const pokemonNames = [];
  const [isEvolutionChainExist, setIsEvolutionChainExist] = useState(true);


  useEffect(() => {
    setLoading(true);
    setIsEvolutionChainExist(true);
    fetchEvolutionChain(pokemonData, pokemonNames, setEvolutionData, setIsEvolutionChainExist, setLoading);
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
    </div>
  );
};

export default PokemonEvolution;
