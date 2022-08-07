import React from "react";

import PokemonsList from "./PokemonsList";
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
            <PokemonsList
              pokemonData={pokemonData}
              itemsPerPage={cardsPerPage}
            />

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
