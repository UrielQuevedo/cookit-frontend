import React, { useState } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './New.css';
import { postNewRecipe } from '../../../service/recipe-service';
import { useHistory } from 'react-router-dom';
import ImageInput from '../../../components/NewRecipe/image-input';
import RecipeInputs from '../../../components/NewRecipe/recipe-inputs';
import IngredientInputs from '../../../components/NewRecipe/ingredient-inputs';
import LayoutSection from '../../../components/NewRecipe/layout-section';
import StepsRecipe from '../../../components/NewRecipe/steps-recipe';

const PUBLISH_BUTTON_NAME = 'publicar';

const New = () => {
  const [recipe, setRecipe] = useState({});
  const { push } = useHistory();
  const [ingredients, setIngredients] = useState([
    { name: undefined, quantity_weight: undefined }
  ]);
  const [stepsRecipes, setStepsRecipes] = useState([
    { description: undefined }
  ]);

  const changeField = event => {
    const { value, name } = event.target;
    setRecipe(recipe_ => ({ ...recipe_, [name]: value }));
  };

  const sucessfullNewRecipe = () => {
    setIngredients([{}]);
    setRecipe({});
    push('/');
  };

  const handleSubmit = event => {
    event.preventDefault();
    postNewRecipe({
      ...recipe,
      ingredients,
      steps: stepsRecipes
    }).then(() => sucessfullNewRecipe());
    event.target.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center" alignItems="center" direction="column">
          <ImageInput recipe={recipe} changeField={changeField} />
          <RecipeInputs changeField={changeField} />
          <IngredientInputs
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <StepsRecipe
            stepsRecipes={stepsRecipes}
            setStepsRecipes={setStepsRecipes}
          />
          <LayoutSection>
            <Button
              type="submit"
              color="primary"
              size="large"
              variant="contained"
              fullWidth
              style={{ margin: '10px 0 30px 0' }}
            >
              {PUBLISH_BUTTON_NAME}
            </Button>
          </LayoutSection>
        </Grid>
      </form>
    </Container>
  );
};

export default New;
