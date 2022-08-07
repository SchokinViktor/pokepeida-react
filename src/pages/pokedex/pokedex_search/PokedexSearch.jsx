import React, { useContext, useState, useEffect } from "react";

import SearchInput from "../../../components/search_input/SearchInput";
import FilterInput from "../../../components/filter_input/FilterInput";

const PokedexSearch = ({ allPokemonData, setPokemonData, pokemonData }) => {
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [heightValue, setHeightValue] = useState('');
  
  useEffect(() => {
    let result = allPokemonData;

    result = handleSearch(searchValue, result)
    console.log('SEARCH filter');
    console.log(result);
    result = handleFilterHeight(heightValue, result)
    console.log('HEIGHT filter');
    console.log(result);
    setPokemonData(result)
    console.log('RESULT');
    console.log(pokemonData)
  }, [searchValue, heightValue])
  

  const handleSearch = (pokemonName, array) => {

    // eslint-disable-next-line array-callback-return
    array = array.filter((item) => {
      if (item.name.toLowerCase().includes(pokemonName.toLowerCase())) {
        return item;
      }
    });
    return array
    // setFilteredPokemons(filteredData);
  };

  const handleFilterHeight = (pokemonHeight, array) => {
    // eslint-disable-next-line array-callback-return
    if(pokemonHeight == '') {
      return array
    }else {
      array = array.filter((item) => {
        if (item.height === pokemonHeight) {
          return item;
        }
      });
      return array
    }
    
    // setPokemonData(filteredData);
  };

  const typesArray = [
    "Bug",
    "Dragon",
    "Fairy",
    "Fire",
    "Ghost",
    "Ground",
    "Normal",
    "Psycho",
    "Steel",
    "Dark",
    "Electric",
    "Fighting",
    "Flying",
    "Grass",
    "Ice",
    "Poison",
    "Rock",
    "Water",
  ];
  const heightArray = [3, 11, 15];
  const weightArray = [150, 250, 350];

  

  return (
    <section className='pokedex-search'>
      <div className='container'>
        <SearchInput
          className='pokedex-search__input'
          placeholder='Search for Pokemon!'
          handleSearch={handleSearch}
          setSearchValue = {setSearchValue}
        />
        <div className='pokedex-search__row'>
          <div className='pokedex-search__filter-order'>
            <FilterInput
              label='Order'
              optionsArray={["Asending", "Decreasing"]}
              standartVariant={true}
              // hasNoneOption = {false}
            />
          </div>
          <div className='pokedex-search__filter-range'>Range</div>
        </div>
        <div className='pokedex-search__row'>
          <ul className='pokedex-search__filter-list'>
            <li className='pokedex-search__filter-item'>
              <FilterInput
                label='Type'
                optionsArray={typesArray}
                multiple={true}
                hasNoneOption={false}
              />
            </li>
            <li className='pokedex-search__filter-item'>
              <FilterInput
                onChange={handleFilterHeight}
                setValue = {setHeightValue}
                label='Height'
                optionsArray={heightArray}
              />
            </li>
            <li className='pokedex-search__filter-item'>
              <FilterInput label='Weight' optionsArray={weightArray} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PokedexSearch;
