import React, { useContext } from 'react'
import { Context } from '../PokemonDetailContext'
import PokemonInfoCard from '../../../components/pokemon_info/PokemonInfoCard'

const PokemonInfo = () => {
  const { pokemonData } = useContext(Context);

  const checkZero = (number) => {
    if(number < 10) return `00${number}`;
    else if (number > 10 && number < 100) return `0${number}`;
    else return number
  }

  return (
    <div className='pokemon-info'>
        <div className='pokemon-info__pokemon-id'>{checkZero(pokemonData.id)}</div>
        <div className="pokemon-info__container">
        <PokemonInfoCard pokemonData ={pokemonData}/>
        </div>
    </div>
  )
}

export default PokemonInfo