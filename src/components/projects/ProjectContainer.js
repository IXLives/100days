// ===== Library Imports ===== \\
import React from "react";

// ===== Asset Imports ===== \\
import pokedextrous from "../../assets/pokedextrous.jpg";
import propman from "../../assets/propman.jpg";

// ===== Component Imports ===== \\
import Project from "./Project";

// ===== Style Imports ===== \\
import { Grid } from "@material-ui/core";

const ProjectContainer = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing="3"
      >
        <Grid item>
          <Project
            name="PropMan"
            description="Property management application for tracking properties, tenants and work orders"
            link="http://propman.netlify.com"
            image={propman}
          />
        </Grid>
        <Grid item>
          <Project
            name="PokeDextrous"
            description="Landing page for a Pokedex App. App is the next project!"
            link="https://lambdapokedex.github.io/marketing_pokedex/index.html"
            image={pokedextrous}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectContainer;
