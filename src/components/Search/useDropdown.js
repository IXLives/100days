import React, { useState } from "react";

import { InputLabel, Select } from "@material-ui/core";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <InputLabel htmlFor={id}>
      {label}
      <Select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </InputLabel>
  );
  return [state, Dropdown];
};

export default useDropdown;
