import axios from "axios";

const getPokemons = async (data, setPokemonData, searchValue) => {
  data
    // eslint-disable-next-line array-callback-return
    .filter((item) => {
      if (searchValue === "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    })
    .map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
};

export default getPokemons;
