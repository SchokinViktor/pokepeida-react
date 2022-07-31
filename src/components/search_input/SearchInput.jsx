import React, { useContext } from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass";
import { Context } from "../../pages/pokedex/context";

const PokedexSearch = ({ className = "", placeholder = "" }) => {
  const { setInputValue } = useContext(Context);

  return (
    <div className={addAdditionalClass(className, "search-input-holder")}>
      <input
        type='text'
        placeholder={placeholder}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
    </div>
  );
};

export default PokedexSearch;
