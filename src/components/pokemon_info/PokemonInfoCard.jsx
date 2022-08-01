import React from "react";

const PokemonInfoCard = ({ pokemonData }) => {
  //console.log(pokemonData);

  if (!pokemonData.types) return <div>Loading...</div>;

  return (
    <div className='pokemon-info-card'>
      <div className='pokemon-info-card__img-holder'>
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemonData.name}
        />
      </div>
      <div className='pokemon-info-card__number'>№{pokemonData.id}</div>
      <div className='pokemon-info-card__name'>{pokemonData.name}</div>
      <ul className='pokemon-info-card__types-list'>
        {pokemonData.types.map((item, index) => {
          return (
            <li className='pokemon-info-card__type-item' key={index}>
              <div className='pokemon-info-card__type'>{item.type.name}</div>
            </li>
          );
        })}
      </ul>
      <ul className='pokemon-info-card__stats-list'>
        <li className='pokemon-info-card__stats-item'>
          <div className='pokemon-info-card__stat-title'>Height</div>
          <div className='pokemon-info-card__stat-text'>
            {pokemonData.height} ft
          </div>
        </li>
        <li className='pokemon-info-card__stats-item'>
          <div className='pokemon-info-card__stat-title'>Weight</div>
          <div className='pokemon-info-card__stat-text'>
            {pokemonData.weight} IBS
          </div>
        </li>
        <li className='pokemon-info-card__stats-item'>
          <div className='pokemon-info-card__stat-title'>Base XP</div>
          <div className='pokemon-info-card__stat-text'>
            {pokemonData.base_experience} points
          </div>
        </li>
      </ul>
      <div className='pokemon-info-card__abilities'>
        <div className='pokemon-info-card__abilities-title'>Ablilities</div>
        <ul className='pokemon-info-card__abilities-list'>
          {pokemonData.abilities.map((item, index) => {
            return (
              <li className='pokemon-info-card__ability-item' key={index}>
                <div className='pokemon-info-card__ability'>
                  {item.ability.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PokemonInfoCard;
