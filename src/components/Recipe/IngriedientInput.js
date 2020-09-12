import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import AbstractInput from '../AbstractInput';
import CloseIcon from '@material-ui/icons/Close';

const IngredientInput = ({ ingredients, changeField }) => {
  return ingredients.map((_, i) => (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      spacing={3}
    >
      <Grid item xs={4}>
        <AbstractInput onChange={changeField(i)} type="text" placeholder="200g/ml" name="quantity_weight" />
      </Grid>
      <Grid item xs={7}>
        <AbstractInput onChange={changeField(i)} type="text" placeholder="Ingrediente" name="name" />
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  ));
}

export default IngredientInput;