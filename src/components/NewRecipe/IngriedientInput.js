import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import AbstractInput from '../AbstractInput';
import CloseIcon from '@material-ui/icons/Close';

const IngredientInput = ({ ingredients, setIngredients }) => {

  const removeIngredient = (i) => () => {
    if(ingredients.length <= 1) return;
    setIngredients(ingredients_ => ingredients_.filter((_, inx) => inx !== i));
  }

  const handleIngredientField = (i) => (event) => {
    const { value, name } = event.target;
    const ingredient = ingredients[i];
    ingredient[name] = value;
    setIngredients((ingredients) =>
      ingredients.map((ing, idx) => {
        if (idx === i) return ingredient;
        return ing;
      })
    );
  };

  return ingredients.map((ingredient, i) => (
    <Grid
      key={i}
      container
      justify="center"
      alignItems="center"
      direction="row"
      spacing={3}
      style={{ marginBottom: '1px' }}
    >
      <Grid item xs={4}>
        <AbstractInput onChange={handleIngredientField(i)} value={ingredient.quantity_weight} type="text" placeholder="200g/ml" name="quantity_weight" />
      </Grid>
      <Grid item xs={6} md={7}>
        <AbstractInput onChange={handleIngredientField(i)} value={ingredient.name} type="text" placeholder="Ingrediente" name="name" />
      </Grid>
      <Grid item xs={2} md={1}>
        <IconButton onClick={removeIngredient(i)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  ));
}

export default IngredientInput;