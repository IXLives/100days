import React from "react";
import ReactDom from "react-dom";

import pokedextrous from "./assets/pokedextrous.jpg";
import propman from "./assets/propman.jpg";

const cr = React.createElement;

const Project = props => {
  return cr("div", {}, [
    cr("h2", {}, props.name),
    cr("p", {}, props.description),
    cr("a", { href: props.link }, props.name),
    cr("img", { src: props.image })
  ]);
};

const App = () => {
  return cr(
    "div",
    {},
    cr("h1", {}, "100 Days - React Fundamentals"),
    cr(Project, {
      name: "PropMan",
      description:
        "Property management application for tracking properties, tenants and work orders",
      link: "http://propman.netlify.com",
      image: pokedextrous
    }),
    cr(Project, {
      name: "PokeDextrous",
      description: "Landing page for a Pokedex App. App is the next project!",
      link: "https://lambdapokedex.github.io/marketing_pokedex/index.html",
      image: propman
    })
  );
};

ReactDom.render(React.createElement(App), document.getElementById("root"));
