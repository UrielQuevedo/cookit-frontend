import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Comments from '../../../components/Recipe/Comment/comments';
import { getComments } from '../../../service/recipe-service';
import './comment-list.css';

const CommentList = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { recipeName, recipeImageUrl } = state;
  const [comments, setComments] = useState([]);

  const getComments_ = async () => {
    const { content } = await getComments(id, {
      page: 0,
      size: 2
    });
    console.log(content)
  };

  useEffect(() => {
    getComments_();
  }, []);

  return (
    <div>
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
      <Grid container justify="center" style={{ marginTop: '50px' }}>
        <Grid container item xs={12} sm={6} justify="center" className="bg">
       
        </Grid>
      </Grid>  
    </div>
  )
}

export default CommentList;
