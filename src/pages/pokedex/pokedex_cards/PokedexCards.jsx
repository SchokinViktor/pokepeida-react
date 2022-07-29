import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Pagination from "../../../components/pagination/Pagination";
// import PokemonCard from "../../../components/pokedex_card/PokedexCard";
import PokemonsList from "./PokemonsList";


const PokedexCards = ({ pokemonData, setPokemonData }) => {
  // const [loading, setLoading] = useState(true);

  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=151`
  );

  const getPokemons = async (data) => {
    data.map(async (item) => {
      const result = await axios.get(item.url);
      //console.log(result);
      setPokemonData((state) => {
        //console.log(result.data);
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentPokemons = pokemonData.slice(firstCardIndex, lastCardIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      const response = await axios.get(url);
      console.log(response.data);
      getPokemons(response.data.results);
      // setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className='pokedex-cards'>
      <div className='container'>
        <PokemonsList pokemonData={currentPokemons} />
        {/* <ul className='pokedex-cards__cards-list'>
          {currentPokemons.map((item, i) => {
            return (
              <li key={i} className='pokedex-cards__card-item'>
                <PokemonCard className='' pokemon={item} />
              </li>
            );
          })}
        </ul> */}
        
        <Pagination
          elementsPerPage={cardsPerPage}
          totalElements={pokemonData.length}
          OnChange={paginate}
          currentPage={currentPage}
          buttons={true}
        />
        
       
      </div>
    </section>
  );
};

export default PokedexCards;
