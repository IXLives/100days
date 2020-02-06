// ===== Library Imports ===== \\
import React from "react";

// ===== Style Imports ===== \\
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Link
} from "@material-ui/core";

const Project = props => {
  return (
    <Card className="project-card">
      <CardActionArea>
        <CardMedia
          component="img"
          className="project-card-img"
          image={props.image}
          title="Project Logo"
          alt="Project Logo"
        />
        <CardContent>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={props.link}>{props.name}</Link>
      </CardActions>
    </Card>
  );
};

export default Project;
