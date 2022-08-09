import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import NoData from "../../../components/no_data/NoData";

const PokemonDetailRadar = ({ pokemonData, evolutionData }) => {
  const [statsData, setStatsData] = useState({});
  const [statsOptions, setStatsOptions] = useState({});

  useEffect(() => {
    const evolutionDatasets = evolutionData.map((pokemon, i) => {
      const pokemonStats = {
        label: pokemon.name.toUpperCase(),
        data: pokemon.stats.map((item) => item.base_stat),
        backgroundColor: [
          `rgba(255,233,52, 0.35)`,
          `rgba(143, 174, 255, 0.35)`,
          `rgba(98, 223, 0, 0.35)`,
        ],
        borderColor: [
          `rgba(255,233,52, 1)`,
          `rgba(143, 174, 255, 1)`,
          `rgba(98, 223, 0, 1)`,
        ],
        pointBackgroundColor: "#446DFF",
        pointHoverBackgroundColor: "#FF5350",
        tension: 0.05,
        pointRadius: 4,
      };

      return pokemonStats;
    });

    setStatsData({
      labels: pokemonData.stats.map((item) => item.stat.name.toUpperCase()),
      datasets: evolutionDatasets,
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
          display: true,
          labels: {
            font: {
              color: "#444444",
              size: 16,
              weight: 600,
            },
          },
        },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evolutionData]);

  if (!statsData.datasets) return <div>Loading...</div>;

  return (
    <div className='pokemon-detail-radar'>
      <div className='pokemon-detail-radar__title'>STaTs CoMpARISON</div>
      <div className='pokemon-detail-radar__wrapper'>
        {statsData.datasets.length !== 0 ? (
          <Radar data={statsData} options={statsOptions} />
        ) : (
          <NoData text={'No Stats Data'}/>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailRadar;
