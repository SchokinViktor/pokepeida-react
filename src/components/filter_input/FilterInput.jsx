import React, { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const FilterInput = ({
  label,
  optionsArray,
  multiple = false,
  hasNoneOption = true,
  setValue,
}) => {
  const [values, setOptionValues] = useState([]);

  const handleChange = (event) => {
    setOptionValues(event.target.value);

    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={values}
        label={label}
        multiple={multiple}
        onChange={handleChange}
        inputProps={{
          MenuProps: {
            disableScrollLock: true,
            PaperProps: { sx: { maxHeight: 250 } },
          },
        }}
      >
        {hasNoneOption && <MenuItem value={""}>All</MenuItem>}

        {optionsArray.map((item, i) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FilterInput;
