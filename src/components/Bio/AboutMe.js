// ===== Library Imports ===== \\
import React from "react";

// ===== Asset Imports ===== \\
import sideye from "../../assets/sideye.png";

// ===== Style Imports ===== \\
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Link
} from "@material-ui/core";

const AboutMe = () => {
  return (
    <Grid>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            className="bio-card-img"
            alt="bio-card-img"
            image={sideye}
          />
          <CardContent>
            <h2>Ian Bryant</h2>
            <p>Developing Developer -- 100 Days of Code</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AboutMe;
