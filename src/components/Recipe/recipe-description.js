import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const RecipeDescription = ({ imageUrl, name, description }) => (
  <>
    <Grid container justify="center" item xs={12}>
      <img className="image-recipe" src={imageUrl} alt={name} />
    </Grid>
    <Grid item xs={12} className="plr-20">
      <Typography variant="h4" className="title-recipe">
        {name}
      </Typography>
      <Typography variant="subtitle2" className="mb-20 recipe-category">
        (categoria)
      </Typography>
    </Grid>
    <Grid item xs={12} className="plr-20">
      <Typography variant="body1" className="recipe-description">
        {description}
      </Typography>
    </Grid>
  </>
);

export default RecipeDescription;
