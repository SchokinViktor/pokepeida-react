import React from 'react';

import { addAdditionalClass } from '../../../utils/addAdditionalClass';

import PokedexIcon from '../../icons/PokedexIcon';
// search-button__icon

const SearchButton = ({className = ''}) => {
  return (
    <button className={addAdditionalClass(className, 'search-button')}>
      <PokedexIcon className='search-button__icon' color='#fff'/>
    </button>
  )
}

export default SearchButton