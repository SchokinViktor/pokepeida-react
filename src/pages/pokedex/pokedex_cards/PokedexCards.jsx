import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PokemonCard from '../../../components/pokedex_card/PokedexCard';
import ThreeDButton from '../../../components/buttons/three_d_button/ThreeDButton';
import { leftSlideAnim } from '../../../utils/framerMotionAnims';

const PokedexCards = ({ pokemonData, setCardsPerPage, cardsPerPage }) => {
  const showMoreItems = () => {
    console.log(cardsPerPage);
    setCardsPerPage((prevValue) => prevValue + 9);
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
                if (animationDelay > 3) animationDelay = 1;
                return (
                  <motion.li
                    custom={animationDelay}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={leftSlideAnim}
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
