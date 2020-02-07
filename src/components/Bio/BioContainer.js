// ===== Library Imports ===== \\
import React from "react";

// ===== Style Imports ===== \\
import { Paper } from "@material-ui/core";

// ===== Component Imports ===== \\
import AboutMe from "./AboutMe";

const BioContainer = () => {
  return (
    <Paper elevation="5">
      <AboutMe />
    </Paper>
  );
};

export default BioContainer;
