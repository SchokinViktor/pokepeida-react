import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonEvolution from "./pokemon_evolution/PokemonEvolution";

import PokemonDetailmage from "./pokemon_detail_image/PokemonDetailmage";

import fetchData from "../../utils/fetchData";
import { Context } from "./PokemonDetailContext";
import PokemonDetailCard from "../../components/pokemon_detail_card/PokemonDetailCard";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPokemonData = async () => {
    const result = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonData(result.data);
  };

  useEffect(() => {
    getPokemonData();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!pokemonData || isLoading) return <div>Loading...</div>;
  if (pokemonData.sprites === undefined) return <div>Loading...</div>;

  return (
    <section className='pokemon-detail'>
      <div className='pokemon-detail__container container'>
        <div className='pokemon-detail__col'>
          <PokemonDetailCard pokemonData={pokemonData} />
        </div>
        <div className='pokemon-detail__col'>
          <PokemonDetailmage pokemonData={pokemonData} />
          <PokemonEvolution pokemonData={pokemonData}/>
        </div>
      </div>
    </section>
  );
};

export default PokemonDetail;
