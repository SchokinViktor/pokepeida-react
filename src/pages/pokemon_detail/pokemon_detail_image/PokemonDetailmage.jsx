import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import checkZero from '../../../utils/chekZero';
import { pokemonsLimit } from '../../../utils/getAllPokemons';
import DefinePokemonSprite from '../../../components/definePokemonSprite/DefinePokemonSprite';
import ThreeDButton from '../../../components/buttons/three_d_button/ThreeDButton';
import { PokemonDetailContext } from '../PokemonDetail';

const PokemonDetailmage = () => {
  const { pokemonData, evolutionDataLoading } = useContext(PokemonDetailContext);

  const navigate = useNavigate();

  const onNextPokemon = () => {
    navigate(pokemonData.id === pokemonsLimit ? `/pokemon/${1}` : `/pokemon/${pokemonData.id + 1}`);
  };

  const onPrevPokemon = () => {
    navigate(pokemonData.id === 1 ? `/pokemon/${pokemonsLimit}` : `/pokemon/${pokemonData.id - 1}`);
  };

  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>{checkZero(pokemonData.id)}</div>
      <div className='pokemon-detail-img__img-holder'>
        <DefinePokemonSprite pokemon={pokemonData} ifPixel={false} />
      </div>
      <div className='pokemon-return'></div>

      <div className='pokemon-detail-img__btns'>
        <ThreeDButton
          buttonText='PREV'
          className='pokemon-detail-img__btn'
          onClick={onPrevPokemon}
          disabled={evolutionDataLoading}
        />

        <ThreeDButton
          buttonText='NEXT'
          className='pokemon-detail-img__btn'
          onClick={onNextPokemon}
          disabled={evolutionDataLoading}
        />
      </div>
    </div>
  );
};

export default PokemonDetailmage;
