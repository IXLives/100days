import React from "react";

const Project = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href={props.link}>{props.name}</a>
      <img src={props.image} />
    </div>
  );
};

export default Project;
