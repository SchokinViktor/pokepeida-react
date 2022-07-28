import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import PokedexCard from "../../../components/pokedex_card/PokedexCard";

const PokedexCards = ({ pokemonData, setPokemonData }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(url);
    //console.log(response.data);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.prev);
    getPokemon(response.data.results);
    setLoading(false);
    //console.log(pokemonData);
  };

  const getPokemon = async (data) => {
    data.map(async (item) => {
      const result = await axios.get(item.url);
      //console.log(result);
      setPokemonData((state) => {
        console.log(result.data);
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <section className='pokedex-cards'>
      <div className='container'>
        <ul className='pokedex-cards__cards-list'>
          {pokemonData.map((item, i) => {
            return (
              <li key={i} className='pokedex-cards__card-item'>
                <PokedexCard className='' pokemon={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PokedexCards;
