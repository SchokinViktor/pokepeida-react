import React from 'react';
import { motion } from 'framer-motion';

import PokedexHeroImage from '../../../assets/images/pikachu-hero.png';
import PokedexHeroIcon from '../../../assets/images/pokeball-icon-hero.svg';
import { bottomSlideAnim } from '../../../utils/framerMotionAnims';
// import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";

const PokedexHero = React.memo(() => {
  return (
    <section className='pokedex-hero'>
      <motion.div
        custom={1.5}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={bottomSlideAnim}
        className='pokedex-hero__container container'>
        <div className='pokedex-hero__col'>
          <div className='pokedex-hero__img-holder'>
            <div className='pokedex-hero__icon-holder'>
              <img src={PokedexHeroIcon} alt='pokeball' />
            </div>
            <img src={PokedexHeroImage} alt='Pikachu' />
          </div>
        </div>
        <div className='pokedex-hero__col'>
          <div className='pokedex-hero__text-holder'>
            <h1 className='pokedex-hero__title'>
              Welcome to <br />
              <span>Pokepedia!</span>
            </h1>
            <p className='pokedex-hero__text'>
              A handy tool for finding pokemon you are interested in!
            </p>
            {/* <ThreeDButton
              buttonText='Explore Pokedex!'
              className='pokedex-hero__btn'
            ></ThreeDButton> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default PokedexHero;
