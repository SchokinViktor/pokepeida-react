import axios from 'axios';

export const pokemonsLimit = 905;

const getAllPokemons = async (setPokemonData) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsLimit}`);

  response.data.results.map(async (item) => {
    const result = await axios.get(item.url);

    setPokemonData((state) => {
      state = [...state, result.data];
      return state;
    });
  });
};

export default getAllPokemons;
