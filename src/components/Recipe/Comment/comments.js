import React from 'react';
import { Grid } from '@material-ui/core';
import Comment from './card-comment';

const Comments = ({ comments }) => {
 
  return (
    <Grid item container xs={12} className="plr-20">
      {comments.map((comment, index) => (
        <Grid key={index} item xs={12}>
          <Comment comment={comment} />
        </Grid>
      ))}
    </Grid>
  )
};

export default Comments;
