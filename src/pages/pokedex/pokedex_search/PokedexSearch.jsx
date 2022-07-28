import React from "react";
import SearchInput from "../../../components/search_input/SearchInput";

const PokedexSearch = ({ className = "" }) => {
  return (
    <section className='pokedex-search'>
      <div className='container'>
        <SearchInput
          className='pokedex-search__input'
          placeholder='Search for Pokemon!'
        />
      </div>
    </section>
  );
};

export default PokedexSearch;
