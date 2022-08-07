import fetchData from "./fetchData";

const FetchAllPokemons = async (setPokemonData) => {
  const response = await fetchData(
    `https://pokeapi.co/api/v2/pokemon/?limit=500`
  );

  const pokemonsArray = [];
  response.data.results.map(async (item) => {
    const result = await fetchData(item.url);

    setPokemonData((state) => {
      state = [...state, result.data];
      state.sort((a, b) => (a.id > b.id ? 1 : -1));
      return state;
    });
  });
  console.log("call");
  return pokemonsArray;
};

export default FetchAllPokemons;
