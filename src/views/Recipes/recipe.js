import { Divider, Grid, Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import RecipeDescription from 'components/Recipe/recipe-description';
import UserInformation from 'components/Recipe/user-information';
import Time from 'components/Recipe/time';
import IngredientList from 'components/Recipe/ingredient-list';
import AddComment from 'components/Recipe/Comment/add-coment';
import StepList from 'components/Recipe/step-list';
import { useParams, useHistory } from 'react-router-dom';
import { getRecipe } from 'service/recipe-service';
import './Recipe.css';
import { formatDateAndTime } from 'utils/format-date-time';
import { ChefHutSpinner } from 'components/spinner';
import SectionTitle from '../../components/Recipe/section-title';
import Comment from '../../components/Recipe/Comment/card-comment';

const TITLE = 'Comentarios';

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
    user,
  } = recipe;
  const [lastComment, setLastComment] = useState(null);
  const [commentsSize, setCommentsSize] = useState(0);
  const { push } = useHistory();

  useEffect(() => {
    const getResponse = async () => {
      setLoading(true);
      const recipe_ = await getRecipe(id);
      setRecipe(recipe_);
      setLastComment(recipe_.lastComment);
      setCommentsSize(recipe_.commentsSize);
      setLoading(false);
    };
    getResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPageComments = _ => {
    push({
      pathname: `/recipes/${id}/comments`,
      state: {
          recipeName: name,
          recipeImageUrl: imageUrl
        }
      })
  }

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
            user={user}
            created_at={formatDateAndTime(created_at)}
          />
          <Time time={time} />
          <IngredientList ingredients={ingredients} comensales={comensales} />
          <Grid item xs={12}>
            <Divider className="height mb-20" />
            <StepList steps={steps} />
          </Grid>
          <Grid item xs={12} className="plr-20">
            <Divider className="height mb-20" />
            <SectionTitle title={`${TITLE} (${commentsSize})`} />
            {lastComment 
              && <Link onClick={goToPageComments} color='textSecondary'>
                  Ver todos los comentarios
                 </Link> 
            }
          </Grid>
          <Grid item xs={12}>
            {lastComment && <Comment comment={lastComment}/>}
            <AddComment
              data-testid="add-comment"
              idRecipe={id}
              setLastComment={setLastComment}
              setCommentsSize={setCommentsSize}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Recipe;
