import React from "react";

import { addAdditionalClass } from "../../../utils/addAdditionalClass";

const ThreeDButton = ({ buttonText = '', className = ''}) => {
  return (
    <button className={addAdditionalClass(className, 'btn')}>
      <span>{buttonText}</span>
    </button>
  );
};

export default ThreeDButton;
