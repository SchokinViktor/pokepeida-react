import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

import PokemonEvolution from './pokemon_evolution/PokemonEvolution';
import PokemonDetailmage from './pokemon_detail_image/PokemonDetailmage';
import PokemonDetailCard from '../../components/pokemon_detail_card/PokemonDetailCard';
import PokemonDetailRadar from './pokemon_detail_radar/PokemonDetailRadar';
import ThreeDButton from '../../components/buttons/three_d_button/ThreeDButton';
import SplashScreen from '../../components/splash_screen/SplashScreen';
import { defineTypeColor } from '../../utils/defineTypeColor';
import { leftSlideAnim } from '../../utils/framerMotionAnims';

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [evolutionData, setEvolutionData] = useState([]);

  const { id } = useParams();

  const getPokemonData = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonData(result.data);
  };

  const fetchDescription = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

    let descriptionIndex = 0;
    for (const textEntery of result.data.flavor_text_entries) {
      if (textEntery.language.name === 'en') {
        break;
      }
      descriptionIndex++;
    }
    setPokemonDescription(result.data.flavor_text_entries[descriptionIndex].flavor_text);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    getPokemonData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    fetchDescription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonData]);

  if (pokemonData.sprites === undefined)
    return (
      <div>
        <SplashScreen />
      </div>
    );

  return (
    <section
      className='pokemon-detail'
      style={{
        background: defineTypeColor(pokemonData.types[0].type.name),
      }}>
      <motion.div
        custom={1.5}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={leftSlideAnim}
        className='pokemon-detail__container container'>
        <div className='pokemon-detail__col'>
          <PokemonDetailCard pokemonData={pokemonData} pokemonDescription={pokemonDescription} />
        </div>
        <div className='pokemon-detail__col'>
          <PokemonDetailmage pokemonData={pokemonData} setEvolutionData={setEvolutionData} />
          <PokemonEvolution
            pokemonData={pokemonData}
            evolutionData={evolutionData}
            setEvolutionData={setEvolutionData}
          />
        </div>
      </motion.div>
      <div className='pokemon-detail__radar-container container'>
        <PokemonDetailRadar pokemonData={pokemonData} evolutionData={evolutionData} />
      </div>
      <div className='pokemon-detail__return-button'>
        <NavLink to={`/`}>
          <ThreeDButton buttonText='Return To Pokedex' />
        </NavLink>
      </div>
    </section>
  );
};

export default PokemonDetail;
