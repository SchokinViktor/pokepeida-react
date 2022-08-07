import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass";

const PokedexSearch = ({
  className = "",
  placeholder = "",
  setSearchValue,
}) => {
  const handleValueChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <div className={addAdditionalClass(className, "search-input-holder")}>
      <input
        type='text'
        placeholder={placeholder}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default PokedexSearch;
