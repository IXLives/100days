// ===== Library Imports ===== \\
import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "@material-ui";

// ===== Asset Imports ===== \\
import pokedextrous from "./assets/pokedextrous.jpg";
import propman from "./assets/propman.jpg";

// ===== Component Imports ===== \\
import Project from "./projects/Project";

// ===== Global Variables ===== \\
const cr = React.createElement;
//create theme variable for material-ui theme
const theme = {};

const App = () => {
  return (
    <div>
      <h1>100 Days of Code - React Fundamentals</h1>
      <Project
        name="PropMan"
        description="Property management application for tracking properties, tenants and work orders"
        link="http://propman.netlify.com"
        image={propman}
      />
      <Project
        name="PokeDextrous"
        description="Landing page for a Pokedex App. App is the next project!"
        link="https://lambdapokedex.github.io/marketing_pokedex/index.html"
        image={pokedextrous}
      />
    </div>
  );
};
ReactDom.render(<App />, document.getElementById("root"));
