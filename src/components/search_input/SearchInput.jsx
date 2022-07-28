import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass";

import SearchButton from "../buttons/search_button/SearchButton";

const PokedexSearch = ({ className = "", placeholder = "" }) => {
  return (
    <div className= {addAdditionalClass(className, 'search-input-holder')}>
      <input
        type='text'
        placeholder={placeholder}
      />
      <SearchButton className="search-input-holder__button"/>
    </div>
  );
};

export default PokedexSearch;
