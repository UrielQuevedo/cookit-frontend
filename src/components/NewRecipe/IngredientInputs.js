import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import IngredientInput from './IngriedientInput';
import AddIcon from '@material-ui/icons/Add';
import LayoutSection from './LayoutSection';

const IngredientInputs = ({ ingredients, setIngredients }) => {

  const handleNewIngredient = () => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { cantidad: '', nombre: '' },
    ]);
  };

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

  return (
    <LayoutSection>
      <h2>Ingredientes</h2>
      <IngredientInput
        changeField={handleIngredientField}
        ingredients={ingredients}
      />
      <IconButton onClick={handleNewIngredient}>
        <AddIcon />
      </IconButton>
    </LayoutSection>
  );
}

export default IngredientInputs;