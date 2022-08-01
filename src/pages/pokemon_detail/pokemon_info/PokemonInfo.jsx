import React, { useContext } from 'react'
import { Context } from '../PokemonDetailContext'
import PokemonInfoCard from '../../../components/pokemon_info/PokemonInfoCard'

const PokemonInfo = () => {
  const { pokemonData } = useContext(Context);

  return (
    <div className='pokemon-info'>
        <PokemonInfoCard pokemonData ={pokemonData}/>
    </div>
  )
}

export default PokemonInfo