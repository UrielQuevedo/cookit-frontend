import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import './comment-list.css';

const CommentList = () => {
  const { state } = useLocation();
  const { recipeName, recipeImageUrl } = state;

  return (
    <Grid container justify="center">
        <Grid container item xs={12} sm={6} justify="center" className="bg">
          <img className="image-recipe" src={recipeImageUrl} alt={recipeName} />
          <Grid item xs={12} className="plr-20">
            <Typography variant="h6" className="comment-description"> 
              Comentarios en
            </Typography>
          </Grid>
          <Grid item xs={12} className="plr-20">
            <Typography variant="h4" className="recipe-name"> 
              {recipeName}
            </Typography>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default CommentList;
