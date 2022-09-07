/* eslint-disable array-callback-return */
import { pokemonsLimit } from './getAllPokemons';

export const handleSearch = (pokemonName, array) => {
  array = array.filter((item) => {
    if (item.name.toLowerCase().includes(pokemonName.toLowerCase())) {
      return item;
    }
  });
  return array;
};

export const handleFilterHeight = (pokemonHeight, array) => {
  if (pokemonHeight === '') {
    return array;
  } else {
    switch (pokemonHeight) {
      case 'Short':
        array = array.filter((item) => {
          if (item.height / 10 <= 1.5) return item;
        });
        break;

      case 'Middle':
        array = array.filter((item) => {
          if (item.height / 10 > 1.5 && item.height / 10 < 3) return item;
        });
        break;

      case 'Large':
        array = array.filter((item) => {
          if (item.height / 10 >= 3) return item;
        });
        break;

      default:
        break;
    }

    return array;
  }
};

export const handleFilterWeight = (pokemonWeight, array) => {
  if (pokemonWeight === '') {
    return array;
  } else {
    switch (pokemonWeight) {
      case 'Light':
        array = array.filter((item) => {
          if (item.weight / 10 <= 40) return item;
        });
        break;

      case 'Middle':
        array = array.filter((item) => {
          if (item.weight / 10 > 40 && item.weight / 10 < 200) return item;
        });
        break;

      case 'Heavy':
        array = array.filter((item) => {
          if (item.weight / 10 >= 200) return item;
        });
        break;

      default:
        break;
    }

    return array;
  }
};

export const handleFilterTypes = (pokemonTypes, array) => {
  if (pokemonTypes.length === 0) {
    return array;
  } else {
    array = array.filter((item) => {
      let currentPokemonTypes = '';
      item.types.forEach((typeItem) => {
        currentPokemonTypes += typeItem.type.name.toLowerCase() + ' ';
      });

      let check = false;
      for (const item of pokemonTypes) {
        if (!currentPokemonTypes.includes(item.toLowerCase())) {
          check = false;
          break;
        } else {
          check = true;
        }
      }

      if (check) return item;
    });
    return array;
  }
};

export const handleSort = (inputValue, array) => {
  // eslint-disable-next-line array-callback-return
  switch (inputValue) {
    case 'Asending':
      array.sort((a, b) => (a.id > b.id ? 1 : -1));
      break;

    case 'Decreasing':
      array.sort((a, b) => (a.id < b.id ? 1 : -1));
      break;

    default:
      break;
  }
  return array;
};

export const handleRange = (minValue, maxValue, array) => {
  if (!minValue) minValue = 1;
  if (!maxValue) maxValue = pokemonsLimit;
  return array.slice(minValue - 1, maxValue);
};
