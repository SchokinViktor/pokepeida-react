import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

import PokemonEvolution from './pokemon_evolution/PokemonEvolution';
import PokemonDetailmage from './pokemon_detail_image/PokemonDetailmage';
import PokemonDetailCard from '../../components/pokemon_detail_card/PokemonDetailCard';
// import PokemonDetailRadar from './pokemon_detail_radar/PokemonDetailRadar';
import ThreeDButton from '../../components/buttons/three_d_button/ThreeDButton';
import SplashScreen from '../../components/splash_screen/SplashScreen';
import { defineTypeColor } from '../../utils/defineTypeColor';
import { leftSlideAnim } from '../../utils/framerMotionAnims';
import Loader from '../../components/loader/Loader';
const PokemonDetailRadar = React.lazy(() => import('./pokemon_detail_radar/PokemonDetailRadar'));

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [evolutionData, setEvolutionData] = useState([]);
  const [pokemonDataLoading, setPokemonDataLoading] = useState(true);
  const [descriptionDataLoading, setDescriptionDataLoading] = useState(true);
  const [evolutionDataLoading, setEvolutionDataLoading] = useState(true);

  const { id } = useParams();

  const getPokemonData = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonData(result.data);
    setPokemonDataLoading(false);
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
    setDescriptionDataLoading(false);
  };

  useEffect(() => {
    setPokemonDataLoading(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    getPokemonData();
  }, [id]);

  useEffect(() => {
    setDescriptionDataLoading(true);
    fetchDescription();
  }, [pokemonData]);

  if (pokemonDataLoading && descriptionDataLoading && evolutionDataLoading) return <SplashScreen />;

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
          <PokemonDetailmage
            pokemonData={pokemonData}
            setPokemonDataLoading={setPokemonDataLoading}
            loading={evolutionDataLoading}
          />
          <PokemonEvolution
            pokemonData={pokemonData}
            evolutionData={evolutionData}
            setEvolutionData={setEvolutionData}
            loading={evolutionDataLoading}
            setLoading={setEvolutionDataLoading}
          />
        </div>
      </motion.div>
      <div className='pokemon-detail__radar-container container'>
        {evolutionDataLoading && pokemonDataLoading ? (
          <Loader />
        ) : (
          <PokemonDetailRadar pokemonData={pokemonData} evolutionData={evolutionData} />
        )}
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
