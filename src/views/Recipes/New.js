import React, { useState } from 'react';
import {
  Container,
  Grid,
  Button,
} from '@material-ui/core';
import './New.css';
import { postNewRecipe } from '../../service/RecipeService';
import { useHistory } from 'react-router-dom';
import ImageInput from '../../components/NewRecipe/ImageInput';
import RecipeInputs from '../../components/NewRecipe/RecipeInputs';
import IngredientInputs from '../../components/NewRecipe/IngredientInputs';
import LayoutSection from '../../components/NewRecipe/LayoutSection';

const New = () => {
  const [recipe, setRecipe] = useState({});
  const { push } = useHistory();
  const [ingredients, setIngredients] = useState([{}]);

  const changeField = (event) => {
    const { value, name } = event.target;
    setRecipe((recipe) => ({ ...recipe, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postNewRecipe({ ...recipe, ingredients: ingredients }).then(() =>
      push('/')
    );
    setIngredients([{}]);
    setRecipe({});
    event.target.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center" alignItems="center" direction="column">
          <ImageInput recipe={recipe} changeField={changeField} />
          <RecipeInputs changeField={changeField} />
          <IngredientInputs ingredients={ingredients} setIngredients={setIngredients} />
          <LayoutSection>
            <Button
              type="submit"
              color="primary"
              size="large"
              variant="contained"
              fullWidth
              style={{ margin: '10px 0 30px 0' }}
            >
              Publicar
            </Button>
          </LayoutSection>
        </Grid>
      </form>
    </Container>
  );
};

export default New;
