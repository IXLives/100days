// ===== Library Imports ===== \\
import React from "react";
import ReactDom from "react-dom";

// ===== Component Imports ===== \\
import BioContainer from "./components/Bio/BioContainer";
import ProjectContainer from "./components/projects/ProjectContainer";
import SearchParams from "./components/Search/SearchParams";

// ===== Style Imports ===== \\
import "./styles/index.css";
import { Container, Paper } from "@material-ui/core";

// ===== Global Variables ===== \\

// ===== App ===== \\
const App = () => {
  return (
    <Paper id="whole-page" elevation="2" variant="outlined">
      <h1>100 Days of Code - React Fundamentals</h1>
      <BioContainer />
      <ProjectContainer />
      <SearchParams />
    </Paper>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
