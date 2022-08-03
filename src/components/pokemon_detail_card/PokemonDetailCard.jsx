import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import fetchData from "../../utils/fetchData";

const PokemonDetailCard = ({ pokemonData }) => {
  const [statsData, setStatsData] = useState({});
  const [statsOptions, setStatsOptions] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      const url = pokemonData.species.url;
      const result = await fetchData(url);
      setPokemonDescription(result.data.flavor_text_entries[8].flavor_text);
    };
    fetchDescription();

    setStatsData({
      labels: pokemonData.stats.map((item) => item.stat.name.toUpperCase()),
      datasets: [
        {
          label: "STATS",
          data: pokemonData.stats.map((item) => item.base_stat),
          backgroundColor: ["rgba(255, 223, 52, 0.8)"],
          borderColor: "#787D83",
          hoverBackgroundColor: "#FF5350",
          pointBackgroundColor: "#FED601",
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
  }, []);

  useEffect(() => {}, []);

  //
  if (pokemonData === undefined) return <div>Loading...</div>;
  if (statsData.datasets === undefined) return <div>Loading...</div>;
  if (statsOptions.scales.r.pointLabels.font.size === undefined)
    return <div>Loading...</div>;
  if (pokemonDescription === undefined) return <div>Loading...</div>;

  // if (window.outerWidth < 1200) {
  //   statsOptions.scales.r.pointLabels.font.size = 0;
  // }

  return (
    <div className='pokemon-info-card'>
      <div className='pokemon-info-card__container'>
        <div className='pokemon-info-card__img-holder'>
          <img
            className='pokemon-info-card__img-mobile'
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt={pokemonData.name}
          />
          <img
            className='pokemon-info-card__img-desktop'
            // src={pokemonData.sprites.front_default}
            src={
              pokemonData.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt={pokemonData.name}
          />
        </div>
        <div className='pokemon-info-card__name'>{pokemonData.name}</div>
        <ul className='pokemon-info-card__types-list'>
          {pokemonData.types.map((item, index) => {
            return (
              <li className='pokemon-info-card__list-item' key={index}>
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
          <li className='pokemon-info-card__list-item'>
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
                  <div className='pokemon-info-card__ability'>
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
