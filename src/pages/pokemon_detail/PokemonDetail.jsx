import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonEvolution from "./pokemon_evolution/PokemonEvolution";
import PokemonDetailmage from "./pokemon_detail_image/PokemonDetailmage";
import fetchData from "../../utils/fetchData";
import PokemonDetailCard from "../../components/pokemon_detail_card/PokemonDetailCard";
import PokemonDetailRadar from "./pokemon_detail_radar/PokemonDetailRadar";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [evolutionData, setEvolutionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPokemonData = async () => {
    const result = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonData(result.data);
  };

  const fetchDescription = async () => {
    const result = await fetchData(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    setPokemonDescription(result.data.flavor_text_entries[8].flavor_text);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getPokemonData();
    fetchDescription();

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {}, [pokemonData]);

  if (!pokemonData || isLoading) return <div>Loading...</div>;
  if (pokemonData.sprites === undefined) return <div>Loading...</div>;
  if (!pokemonData.species.url === undefined) return <div>Loading...</div>;
  if (!evolutionData) return <div>Loading...</div>;
  return (
    <section className='pokemon-detail'>
      <div className='pokemon-detail__container container'>
        <div className='pokemon-detail__col'>
          <PokemonDetailCard
            pokemonData={pokemonData}
            pokemonDescription={pokemonDescription}
          />
        </div>
        <div className='pokemon-detail__col'>
          <PokemonDetailmage pokemonData={pokemonData} />
          <PokemonEvolution
            pokemonData={pokemonData}
            evolutionData={evolutionData}
            setEvolutionData={setEvolutionData}
          />
        </div>
        
      </div>
      <div className="pokemon-detail__radar-container container">
      <PokemonDetailRadar pokemonData = {pokemonData} evolutionData={evolutionData} />
      </div>
    </section>
  );
};

export default PokemonDetail;
