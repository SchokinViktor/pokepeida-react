import React from "react";
import { Link } from "react-router-dom";

import PokemonCard from "../../../components/pokedex_card/PokedexCard";
import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";

import { motion } from "framer-motion";

const pokemonCardsAnim = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const PokedexCards = ({ pokemonData, setCardsPerPage, cardsPerPage }) => {
  const showMoreItems = () => {
    setCardsPerPage((prevValue) => prevValue + 12);
  };

  let animationDelay = 0;
  return (
    <section className='pokedex-cards'>
      {pokemonData.length !== 0 ? (
        <>
          <div className='container'>
            <ul className='pokedex-cards__cards-list'>
              {pokemonData.slice(0, cardsPerPage).map((item, i) => {
                ++animationDelay;
                if(animationDelay > 3) animationDelay = 1
                return (
                  <motion.li
                    custom={animationDelay}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    variants={pokemonCardsAnim}
                    key={i}
                    className='pokedex-cards__card-item'
                  >
                    <Link
                      style={{
                        width: `100%`,
                        textDecoration: `none`,
                        display: "flex",
                        justifyContent: "center",
                      }}
                      to={`/${item.name}`}
                    >
                      <PokemonCard pokemon={item} />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {cardsPerPage < pokemonData.length && (
              <div className='pokedex-cards__btn-wrapper'>
                <ThreeDButton buttonText='Load More!' onClick={showMoreItems} />
              </div>
            )}
          </div>
        </>
      ) : (
        <div>
          <h2 className='pokedex-cards__empty'>No Pokemons found</h2>
        </div>
      )}
    </section>
  );
};

export default PokedexCards;
