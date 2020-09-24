import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SectionTitle from './section-title';

const TITLE = 'Ingredientes';

const IngredientList = ({ comensales, ingredients = [] }) => {
  const ingredients_length = ingredients.length;
  return (
    <Grid item container xs={12} className="plr-20">
      <SectionTitle title={TITLE} />
      <Grid item xs={12} className="mtb-5">
        <Typography variant="subtitle1">
          <PersonIcon className="icon-transformY-4" /> {comensales}
        </Typography>
      </Grid>
      <Grid item xs={12} container direction="column" className="mb-20">
        {ingredients.map(({ quantity_weight, name }, i) => (
          <Grid key={i} item xs={12} className="mtb-5">
            <Typography variant="body1" className="ingredient-description">
              - <span className="quantity-weight">{quantity_weight}</span>
              {name}
            </Typography>
            {i + 1 !== ingredients_length && <Divider />}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default IngredientList;
