import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import TypeBox from '../type_box/TypeBox';
import { defineTypeColor } from '../../utils/defineTypeColor';
import DefinePokemonSprite from '../definePokemonSprite/DefinePokemonSprite';
import { PokemonDetailContext } from '../../pages/pokemon_detail/PokemonDetail';

const PokemonDetailCard = () => {
  const { pokemonData, pokemonDescription } = useContext(PokemonDetailContext);
  const [statsData, setStatsData] = useState({});
  const [statsOptions, setStatsOptions] = useState({});

  useEffect(() => {
    setStatsData({
      labels: pokemonData.stats.map((item) => item.stat.name.toUpperCase()),
      datasets: [
        {
          label: 'STATS',
          data: pokemonData.stats.map((item) => item.base_stat),
          backgroundColor: [defineTypeColor(pokemonData.types[0].type.name)],
          borderColor: '#787D83',
          hoverBackgroundColor: '#FF5350',
          pointBackgroundColor: '#FED601',
          tension: 0.05,
          pointRadius: 5,
        },
      ],
    });

    setStatsOptions({
      scales: {
        r: {
          pointLabels: {
            padding: 0,

            font: {
              family: "'Rubick', sans-serif",
              size: 12,
              weight: 600,
              lineHeight: 1,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonData]);

  if (statsData.datasets === undefined) return <div>Loading...</div>;

  return (
    <div className='pokemon-info-card'>
      <div className='pokemon-info-card__container'>
        <div className='pokemon-info-card__img-holder'>
          <div className='pokemon-info-card__img-mobile'>
            <DefinePokemonSprite pokemon={pokemonData} ifPixel={false} />
          </div>
          <div className='pokemon-info-card__img-desktop'>
            <DefinePokemonSprite pokemon={pokemonData} />
          </div>
        </div>
        <div className='pokemon-info-card__name'>{pokemonData.name}</div>
        <ul className='pokemon-info-card__types-list'>
          {pokemonData.types.map((item, index) => {
            return (
              <li className='pokemon-info-card__list-item' key={index}>
                <TypeBox typeName={item.type.name} />
              </li>
            );
          })}
        </ul>
        <ul className='pokemon-info-card__stats-list'>
          <li className='pokemon-info-card__stats-item'>
            <div
              className='pokemon-info-card__stat-title'
              style={{ color: defineTypeColor(pokemonData.types[0].type.name) }}>
              Height
            </div>
            <div className='pokemon-info-card__stat-text'>{pokemonData.height / 10} m</div>
          </li>
          <li className='pokemon-info-card__list-item'>
            <div
              className='pokemon-info-card__stat-title'
              style={{ color: defineTypeColor(pokemonData.types[0].type.name) }}>
              Weight
            </div>
            <div className='pokemon-info-card__stat-text'>{pokemonData.weight / 10} kg</div>
          </li>
          <li className='pokemon-info-card__stats-item'>
            <div
              className='pokemon-info-card__stat-title'
              style={{ color: defineTypeColor(pokemonData.types[0].type.name) }}>
              Base XP
            </div>
            <div className='pokemon-info-card__stat-text'>{pokemonData.base_experience} points</div>
          </li>
        </ul>
        <div className='pokemon-info-card__description'>
          <div className='pokemon-info-card__section-title'>Description</div>
          <div className='pokemon-info-card__description-text'>
            <p>{pokemonDescription}</p>
          </div>
        </div>
        <div className='pokemon-info-card__abilities'>
          <div className='pokemon-info-card__section-title'>Abilities</div>
          <ul className='pokemon-info-card__abilities-list'>
            {pokemonData.abilities.map((item, index) => {
              return (
                <li className='pokemon-info-card__list-item' key={index}>
                  <div
                    className='pokemon-info-card__ability'
                    style={{
                      background: defineTypeColor(pokemonData.types[0].type.name),
                    }}>
                    {item.ability.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='pokemon-info-card__chart-holder'>
          <div className='pokemon-info-card__section-title'>Stats</div>
          <Bar data={statsData} options={statsOptions} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
