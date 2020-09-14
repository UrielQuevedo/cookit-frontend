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
      style={{ marginBottom: '1px' }}
    >
      <Grid item xs={4}>
        <AbstractInput onChange={changeField(i)} type="text" placeholder="200g/ml" name="quantity_weight" />
      </Grid>
      <Grid item xs={6} md={7}>
        <AbstractInput onChange={changeField(i)} type="text" placeholder="Ingrediente" name="name" />
      </Grid>
      <Grid item xs={2} md={1}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  ));
}

export default IngredientInput;