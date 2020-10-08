import { Divider, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import RecipeDescription from 'components/Recipe/recipe-description';
import UserInformation from 'components/Recipe/user-information';
import Time from 'components/Recipe/time';
import IngredientList from 'components/Recipe/ingredient-list';
import CommentList from 'components/Recipe/comment-list';
import AddComment from 'components/Recipe/add-coment';
import StepList from 'components/Recipe/step-list';
import { useParams } from 'react-router-dom';
import { getRecipe } from 'service/recipe-service';
import './Recipe.css';
import { formatDateAndTime } from 'utils/format-date-time';
import { ChefHutSpinner } from 'components/spinner';

const NOMBRE = 'Uriel Quevedo';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    name,
    created_at,
    description,
    imageUrl,
    comensales,
    ingredients,
    steps,
    time,
  } = recipe;
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      setLoading(true);
      const recipe_ = await getRecipe(id);
      console.log(recipe_)
      setRecipe(recipe_);
      setComments(recipe_.comments)
      setLoading(false);
    };
    getResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container justify="center">
      {loading ? (
        <ChefHutSpinner />
      ) : (
        <Grid container item xs={12} sm={6} justify="center" className="bg">
          <RecipeDescription
            imageUrl={imageUrl}
            name={name}
            description={description}
          />
          <UserInformation
            name={NOMBRE}
            created_at={formatDateAndTime(created_at)}
          />
          <Time time={time} />
          <IngredientList ingredients={ingredients} comensales={comensales} />
          <Grid item xs={12}>
            <Divider className="height mb-20" />
            <StepList steps={steps} />
          </Grid>
          <Grid item xs={12}>
            <Divider className="height mb-20" />
            <CommentList comments={comments} />
            <AddComment idRecipe={id} setComments={setComments} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Recipe;
