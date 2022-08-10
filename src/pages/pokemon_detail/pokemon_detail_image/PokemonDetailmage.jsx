import React from "react";
import { NavLink } from "react-router-dom";

import checkZero from "../../../utils/chekZero";
import { pokemonsLimit } from "../../../utils/fetchAllPokemons";
import { definePokemonSprite } from "../../../utils/definePokemonSprite";
import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";
import { motion } from "framer-motion";

const ImageAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const PokemonDetailmage = ({ pokemonData }) => {
  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>
        {checkZero(pokemonData.id)}
      </div>
      <motion.div
        custom={1.5}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={ImageAnimation}
        className='pokemon-detail-img__img-holder'
      >
        {definePokemonSprite(pokemonData, false)}
      </motion.div>
      <div className='pokemon-return'></div>
      <div className='pokemon-detail-img__btns'>
        <NavLink
          to={
            pokemonData.id === 1
              ? `/${pokemonsLimit}`
              : `/${pokemonData.id - 1}`
          }
        >
          <ThreeDButton buttonText='PREV' />
        </NavLink>

        <NavLink
          to={
            pokemonData.id === pokemonsLimit
              ? `/${1}`
              : `/${pokemonData.id + 1}`
          }
        >
          <ThreeDButton buttonText='NEXT' />
        </NavLink>
      </div>
    </div>
  );
};

export default PokemonDetailmage;
