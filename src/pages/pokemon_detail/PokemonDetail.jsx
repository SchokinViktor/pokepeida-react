import React, { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import PokemonEvolution from './pokemon_evolution/PokemonEvolution';
import PokemonDetailmage from './pokemon_detail_image/PokemonDetailmage';
import PokemonDetailCard from '../../components/pokemon_detail_card/PokemonDetailCard';
import PokemonDetailRadar from './pokemon_detail_radar/PokemonDetailRadar';
import ThreeDButton from '../../components/buttons/three_d_button/ThreeDButton';
import SplashScreen from '../../components/splash_screen/SplashScreen';
import { defineTypeColor } from '../../utils/defineTypeColor';
import Loader from '../../components/loader/Loader';

export const PokemonDetailContext = createContext();

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [evolutionData, setEvolutionData] = useState([]);
  const [pokemonDataLoading, setPokemonDataLoading] = useState(true);
  const [descriptionDataLoading, setDescriptionDataLoading] = useState(true);
  const [evolutionDataLoading, setEvolutionDataLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  const getPokemonData = async () => {
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonData(result.data);
      setPokemonDataLoading(false);
      console.log(pokemonData);
      console.log('loading ENDED');
    } catch (error) {
      navigate('*');
    }
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
    console.log('loading...');
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
      <PokemonDetailContext.Provider
        value={{
          pokemonData,
          pokemonDescription,
          evolutionData,
          setEvolutionData,
          evolutionDataLoading,
          setEvolutionDataLoading,
        }}>
        <div className='pokemon-detail__container container'>
          <div className='pokemon-detail__col'>
            <PokemonDetailCard />
          </div>
          <div className='pokemon-detail__col'>
            <PokemonDetailmage />
            <PokemonEvolution />
          </div>
        </div>
        <div className='pokemon-detail__radar-container container'>
          {evolutionDataLoading && pokemonDataLoading ? <Loader /> : <PokemonDetailRadar />}
        </div>
      </PokemonDetailContext.Provider>
      <div className='pokemon-detail__return-button'>
        <NavLink to={`/`}>
          <ThreeDButton buttonText='Return To Pokedex' />
        </NavLink>
      </div>
    </section>
  );
};

export default PokemonDetail;
