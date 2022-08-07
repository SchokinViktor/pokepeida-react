import React from "react";
import { pokemonsLimit } from "../../utils/fetchAllPokemons";

const RangeFilter = ({ setMinRangeValue, setMaxRangeValue }) => {
  const handleMinValueChange = (event) => {
    const { value } = event.target;
    setMinRangeValue(value);
  };

  const handleMaxValueChange = (event) => {
    const { value } = event.target;
    setMaxRangeValue(value);
  };

  return (
    <div className='range-filter'>
      <span className='range-filter__text'>from</span>
      <input
        className='range-filter__input'
        type='text'
        placeholder="1"
        onChange={handleMinValueChange}
      />
      <span className='range-filter__text'>to</span>
      <input
        className='range-filter__input'
        type='text'
        placeholder={pokemonsLimit}
        onChange={handleMaxValueChange}
      />
    </div>
  );
};

export default RangeFilter;
