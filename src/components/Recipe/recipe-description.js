import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const RecipeDescription = ({ imageUrl, name, description }) => (
  <>
    <Grid container justify="center" item xs={12}>
      <img className="image-recipe" src={imageUrl} alt={name} />
    </Grid>
    <Grid item xs={12} className="plr-20">
      <Typography variant="h4" className="title-recipe">
        {name}
      </Typography>
    </Grid>
    <Grid item xs={12} className="plr-20">
      <Typography variant="body1" className="recipe-description">
        {description}
      </Typography>
    </Grid>
  </>
);

RecipeDescription.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default RecipeDescription;
