import React from "react";

import { defineTypeColor } from "../../utils/defineTypeColor";
import { addAdditionalClass } from "../../utils/addAdditionalClass";

const TypeBox = ({ typeName, className }) => {
  return (
    <div
      className={addAdditionalClass(className, "type-box")}
      style={{ background: defineTypeColor(typeName) }}
    >
      {typeName}
    </div>
  );
};

export default TypeBox;
