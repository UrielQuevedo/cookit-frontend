import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import IngredientInput from './IngriedientInput';
import AddIcon from '@material-ui/icons/Add';
import LayoutSection from './LayoutSection';

const IngredientInputs = ({ ingredients, setIngredients }) => {

  const handleNewIngredient = () => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { quantity_weight: undefined, name: undefined },
    ]);
  };

  return (
    <LayoutSection>
      <h2>Ingredientes</h2>
      <IngredientInput
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <IconButton onClick={handleNewIngredient}>
        <AddIcon />
      </IconButton>
    </LayoutSection>
  );
}

export default IngredientInputs;