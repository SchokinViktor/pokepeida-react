import axios from 'axios';

export const fetchEvolutionChain = async (
  pokemonData,
  pokemonNames,
  setEvolutionData,
  setIsEvolutionChainExist,
  setLoading,
) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`);
  if (response.data.evolution_chain !== null) {
    const secondResponse = await axios.get(response.data.evolution_chain.url);

    pokemonNames.push(secondResponse.data.chain.species.name);
    if (secondResponse.data.chain.evolves_to.length !== 0) {
      pokemonNames.push(secondResponse.data.chain.evolves_to[0].species.name);

      if (secondResponse.data.chain.evolves_to[0].evolves_to.length !== 0) {
        pokemonNames.push(secondResponse.data.chain.evolves_to[0].evolves_to[0].species.name);
      }
    }
    const addNewEvolutionChain = async (pokemonName) => {
      setEvolutionData([]);
      if (pokemonName !== null) {
        const thirdResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setEvolutionData((state) => {
          state = [...state, thirdResponse.data];
          state.sort((a, b) => (a.order > b.order ? 1 : -1));
          return state;
        });
      }
    };
    pokemonNames.forEach((name) => {
      addNewEvolutionChain(name);
    });
  } else setIsEvolutionChainExist(false);
  setTimeout(() => {
    setLoading(false);
  }, 500);
};
