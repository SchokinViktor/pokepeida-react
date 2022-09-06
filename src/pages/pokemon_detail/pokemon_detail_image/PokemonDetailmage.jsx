import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import checkZero from '../../../utils/chekZero';
import { pokemonsLimit } from '../../../utils/getAllPokemons';
import { definePokemonSprite } from '../../../utils/definePokemonSprite';
import ThreeDButton from '../../../components/buttons/three_d_button/ThreeDButton';
import { leftSlideAnim } from '../../../utils/framerMotionAnims';

const PokemonDetailmage = ({ pokemonData }) => {
  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>{checkZero(pokemonData.id)}</div>
      <motion.div
        custom={1.5}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={leftSlideAnim}
        className='pokemon-detail-img__img-holder'>
        {definePokemonSprite(pokemonData, false)}
      </motion.div>
      <div className='pokemon-return'></div>

      <div className='pokemon-detail-img__btns'>
        <NavLink to={pokemonData.id === 1 ? `/${pokemonsLimit}` : `/${pokemonData.id - 1}`}>
          <ThreeDButton buttonText='PREV' className='pokemon-detail-img__btn' />
        </NavLink>

        <NavLink to={pokemonData.id === pokemonsLimit ? `/${1}` : `/${pokemonData.id + 1}`}>
          <ThreeDButton buttonText='NEXT' className='pokemon-detail-img__btn' />
        </NavLink>
      </div>
    </div>
  );
};

export default PokemonDetailmage;
