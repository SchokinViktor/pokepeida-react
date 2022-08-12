import React from "react";

import PokedexHeroImage from "../../../assets/images/pikachu-hero.png";
import PokedexHeroIcon from "../../../assets/images/pokeball-icon-hero.svg";
// import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";

import { motion } from "framer-motion";

const imgAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const PokedexHero = () => {
  return (
    <section className='pokedex-hero'>
      <div className='pokedex-hero__container container'>
        <div className='pokedex-hero__col'>
          <motion.div
            custom={1.5}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={imgAnimation}
            className='pokedex-hero__img-holder'
          >
            <div className='pokedex-hero__icon-holder'>
              <img src={PokedexHeroIcon} alt='pokeball' />
            </div>
            <img src={PokedexHeroImage} alt='Pikachu' />
          </motion.div>
        </div>
        <div className='pokedex-hero__col'>
          <motion.div
            custom={3}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={imgAnimation}
            className='pokedex-hero__text-holder'
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PokedexHero;
