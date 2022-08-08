import React from "react";
import { Link } from "react-router-dom";

import PokemonCard from "../../../components/pokedex_card/PokedexCard";
import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";

const PokedexCards = ({ pokemonData, setCardsPerPage, cardsPerPage }) => {
  const showMoreItems = () => {
    setCardsPerPage((prevValue) => prevValue + 12);
  };

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <section className='pokedex-cards'>
      {pokemonData.length !== 0 ? (
        <>
          <div className='container'>
            <ul className='pokedex-cards__cards-list'>
              {pokemonData.slice(0, cardsPerPage).map((item, i) => {
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
                      <PokemonCard pokemon={item} />
                    </Link>
                  </li>
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
