import React, { useState, useEffect } from 'react';

import SearchInput from '../../../components/search_input/SearchInput';
import FilterInput from '../../../components/filter_input/FilterInput';
import RangeFilter from '../../../components/range_filter/RangeFilter';
import {
  handleRange,
  handleSearch,
  handleFilterHeight,
  handleFilterWeight,
  handleFilterTypes,
  handleSort,
} from '../../../utils/filters';
import { typesArray, heightArray, weightArray } from '../../../utils/filtersData';

const PokedexSearch = ({ allPokemonData, setPokemonData, setCardsPerPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [heightValue, setHeightValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [typesValue, setTypesValue] = useState([]);
  const [maxRangeValue, setMaxRangeValue] = useState();
  const [minRangeValue, setMinRangeValue] = useState();

  useEffect(() => {
    let result = allPokemonData;
    setCardsPerPage(9);
    result = handleRange(minRangeValue, maxRangeValue, result);
    result = handleSearch(searchValue, result);
    result = handleFilterHeight(heightValue, result);
    result = handleFilterWeight(weightValue, result);
    result = handleFilterTypes(typesValue, result);
    result = handleSort(sortValue, result);
    setPokemonData(result);
  }, [searchValue, heightValue, weightValue, typesValue, sortValue, maxRangeValue, minRangeValue]);

  return (
    <section className='pokedex-search'>
      <div className='container'>
        <SearchInput
          className='pokedex-search__input'
          placeholder='Search for Pokemon!'
          setSearchValue={setSearchValue}
        />
        <div className='pokedex-search__row'>
          <div className='pokedex-search__filter-order'>
            <FilterInput
              label='Order'
              optionsArray={['Asending', 'Decreasing']}
              setValue={setSortValue}
            />
          </div>
          <div className='pokedex-search__filter-range'>
            <RangeFilter setMinRangeValue={setMinRangeValue} setMaxRangeValue={setMaxRangeValue} />
          </div>
        </div>
        <div className='pokedex-search__row'>
          <ul className='pokedex-search__filter-list'>
            <li className='pokedex-search__filter-item'>
              <FilterInput
                label='Type'
                optionsArray={typesArray}
                multiple={true}
                hasNoneOption={false}
                setValue={setTypesValue}
              />
            </li>
            <li className='pokedex-search__filter-item'>
              <FilterInput setValue={setHeightValue} label='Height' optionsArray={heightArray} />
            </li>
            <li className='pokedex-search__filter-item'>
              <FilterInput label='Weight' optionsArray={weightArray} setValue={setWeightValue} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PokedexSearch;
