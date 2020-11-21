import React, { useContext, useState } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './New.css';
import { postNewRecipe } from 'service/recipe-service';
import { useHistory } from 'react-router-dom';
import ImageRecipe from 'components/NewRecipe/image-recipe';
import RecipeInputs from 'components/NewRecipe/recipe-inputs';
import IngredientInputs from 'components/NewRecipe/ingredient-inputs';
import LayoutSection from 'components/NewRecipe/layout-section';
import StepsRecipe from 'components/NewRecipe/steps-recipe';
import { UserContext } from 'context/user-context';

const PUBLISH_BUTTON_NAME = 'publicar';

const New = () => {
  const [recipe, setRecipe] = useState({});
  const [image_url, setImageUrl] = useState(recipe.image_url);
  const { push } = useHistory();
  const { user } = useContext(UserContext);
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
      image_url: image_url,
      userId: user.id,
      ingredients,
      steps: stepsRecipes
    })
      .then(() => sucessfullNewRecipe())
      .catch(error => console.log(error.response));
    event.target.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center" alignItems="center" direction="column">
          <ImageRecipe recipe={recipe} setImageUrl={setImageUrl} />
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
