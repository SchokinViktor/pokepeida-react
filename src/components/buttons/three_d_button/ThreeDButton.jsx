import React from "react";

import { addAdditionalClass } from "../../../utils/addAdditionalClass";

const ThreeDButton = ({ buttonText = '', className = '', disabled = false, onClick}) => {
  return (
    <button disabled = {disabled} className={addAdditionalClass(className, 'btn')} onClick = {onClick}>
      <span className="btn-inner">{buttonText}</span>
    </button>
  );
};

export default ThreeDButton;
