import React from "react";

const ThreeDButton = ({ text, className = "" }) => {
  return (
    <button className={className ? `${className} btn` : "btn"}>
      <span>{text}</span>
    </button>
  );
};

export default ThreeDButton;
