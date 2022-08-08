import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import PokemonEvolution from "./pokemon_evolution/PokemonEvolution";
import PokemonDetailmage from "./pokemon_detail_image/PokemonDetailmage";
import fetchData from "../../utils/fetchData";
import PokemonDetailCard from "../../components/pokemon_detail_card/PokemonDetailCard";
import PokemonDetailRadar from "./pokemon_detail_radar/PokemonDetailRadar";
import ThreeDButton from "../../components/buttons/three_d_button/ThreeDButton";
import { defineTypeColor } from "../../utils/defineTypeColor";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [evolutionData, setEvolutionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();

  const getPokemonData = async () => {
    const result = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemonData(result.data);
  };

  const fetchDescription = async () => {
    const result = await fetchData(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`
    );
    let descriptionIndex = 0;
    console.log(result);
    for (const textEntery of result.data.flavor_text_entries) {
      if (textEntery.language.name === "en") {
        break;
      }
      descriptionIndex++;
    }
    console.log(descriptionIndex);
    setPokemonDescription(
      result.data.flavor_text_entries[descriptionIndex].flavor_text
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getPokemonData();
    

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    fetchDescription();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonData]);

  if (!pokemonData || isLoading) return <div>Loading...</div>;
  if (pokemonData.sprites === undefined) return <div>Loading...</div>;
  if (!pokemonData.species.url === undefined) return <div>Loading...</div>;
  if (!evolutionData) return <div>Loading...</div>;
  return (
    <section className='pokemon-detail' style={{background: defineTypeColor(pokemonData.types[0].type.name) }}>
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
      <div className='pokemon-detail__radar-container container'>
        <PokemonDetailRadar
          pokemonData={pokemonData}
          evolutionData={evolutionData}
        />
      </div>
      <div className='pokemon-detail__return-button'>
        <NavLink to={`/pokedex`}>
          <ThreeDButton buttonText='Return To Pokedex' />
        </NavLink>
      </div>
    </section>
  );
};

export default PokemonDetail;
