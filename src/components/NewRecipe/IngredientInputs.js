import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import LayoutSection from './LayoutSection';
import { useChangeFieldOnList } from '../../hooks/useChangeFieldOnList';
import AbstractInput from '../AbstractInput';

const IngredientInputs = ({ ingredients, setIngredients }) => {
  const [changeIngredients, newIngredient, removeIngredient] =
    useChangeFieldOnList(ingredients, setIngredients);

  return (
    <LayoutSection>
      <h2>Ingredientes</h2>
      {
        ingredients.map(({ name, quantity_weight}, i) => (
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
              <AbstractInput onChange={changeIngredients(i)} value={quantity_weight} type="text" placeholder="200g/ml" name="quantity_weight" />
            </Grid>
            <Grid item xs={6} md={7}>
              <AbstractInput onChange={changeIngredients(i)} value={name} type="text" placeholder="Ingrediente" name="name" />
            </Grid>
            <Grid item xs={2} md={1}>
              <IconButton onClick={removeIngredient(i)}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))
      }
      <IconButton onClick={newIngredient}>
        <AddIcon />
      </IconButton>
    </LayoutSection>
  );
}

export default IngredientInputs;