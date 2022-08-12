import fetchData from "./fetchData";

export const pokemonsLimit = 905;

const FetchAllPokemons = async (setPokemonData) => {
  const response = await fetchData(
    `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsLimit}`
  );

  response.data.results.map(async (item) => {
    const result = await fetchData(item.url);

    setPokemonData((state) => {
      state = [...state, result.data];
      state.sort((a, b) => (a.id > b.id ? 1 : -1));
      return state;
    });
  });
};

export default FetchAllPokemons;
