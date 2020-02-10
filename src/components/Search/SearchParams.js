import React, { useState } from "react";

import {
  TextField,
  Button,
  Paper,
  FormGroup,
  InputLabel,
  Select
} from "@material-ui/core";

import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, updateLocation] = useState("Atlanta, GA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <Paper className="search-params" elevation="5">
      <FormGroup className="search-form">
        <InputLabel htmlFor="location">
          Location
          <TextField
            variant="outlined"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </InputLabel>
        <AnimalDropdown />
        <BreedDropdown />
        <Button variant="outlined">Submit</Button>
      </FormGroup>
    </Paper>
  );
};

export default SearchParams;
