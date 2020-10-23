import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Comments from '../../../components/Recipe/Comment/comments';
import { getComments } from '../../../service/recipe-service';
import AddComment from '../../../components/Recipe/Comment/add-coment';
import LayoutLoading from '../../../components/Layout/layout-loading';
import './comment-list.css';

const CommentList = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { recipeName, recipeImageUrl } = state;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 5,
    totalPages: 1,
    totalElements: '?'
  });

  const getPaginationComments = async () => {
    const { page, size } = pagination;
    const { content, totalElements, totalPages } = await getComments(id, {
      page,
      size
    });
    setPagination(pagination_ => ({
      ...pagination_,
      totalPages,
      totalElements,
      page: pagination_.page + 1
    }));
    setComments(comments_ => [...comments_, ...content])
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPaginationComments();
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
          <LayoutLoading loading={loading}>
            <Grid container item xs={12} sm={6} justify="center" className="bg">
              <Comments comments={comments} getPaginationComments={getPaginationComments} pagination={pagination}/>
            </Grid>
          </LayoutLoading>
        </Grid>
    </div>
  )
}

export default CommentList;
