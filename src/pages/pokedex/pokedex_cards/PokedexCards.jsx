import React from "react";
import { useEffect, useState, useContext } from "react";
// import ReactPaginate from "react-paginate";
import axios from "axios";

import PokemonsList from "./PokemonsList";
import getPokemons from "../../../utils/getPokemons";
import fetchData from "../../../utils/fetchData";
import { Context } from "../pokedexContext";
import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";

const PokedexCards = ({pokemonData}) => {
  //using context

  const [cardsPerPage, setCardsPerPage] = useState(12);
  

  //Fetching Pokemons

  // const renderPokemons = async () => {
  //   setPokemonData([]);
  //   const response = await fetchData(
  //     `https://pokeapi.co/api/v2/pokemon/?limit=500`
  //   );
  //   setCardsPerPage(12);
  //   getPokemons(response.data.results, setPokemonData, inputValue);
  //   console.log("call");
  // };

  // useEffect(() => {
  //   // displayPokemons()
  //   renderPokemons();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     renderPokemons();
  //   }, 800);

  //   return () => clearTimeout(timer);
  // }, [inputValue]);


  const showMoreItems = () => {
    setCardsPerPage((prevValue) => prevValue + 12);
  };
//
  // if(!pokemonData) return <div>Loading...</div>

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
