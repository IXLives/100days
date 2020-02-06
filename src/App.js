// ===== Library Imports ===== \\
import React from "react";
import ReactDom from "react-dom";

// ===== Component Imports ===== \\
import ProjectContainer from "./components/projects/ProjectContainer";

// ===== Style Imports ===== \\
import "./styles/index.css";
import { Container } from "@material-ui/core";

// ===== Global Variables ===== \\

// ===== App ===== \\
const App = () => {
  return (
    <Container>
      <h1>100 Days of Code - React Fundamentals</h1>
      <ProjectContainer />
    </Container>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
