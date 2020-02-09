// ===== Library Imports ===== \\
import React from "react";

// ===== Style Imports ===== \\
import { Paper } from "@material-ui/core";

// ===== Component Imports ===== \\
import AboutMe from "./AboutMe";

const BioContainer = () => {
  return (
    <Paper elevation="5" className="bio-container">
      <AboutMe />
    </Paper>
  );
};

export default BioContainer;
