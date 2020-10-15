import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import Comment from './card-comment';
import SectionTitle from '../section-title';

const TITLE = 'Comentarios';

const CommentList = ({ comments }) => (
  <Grid item container xs={12} className="plr-20">
    {comments.map((comment, index) => (
      <Grid key={index} item xs={12}>
        <Comment comment={comment} />
      </Grid>
    ))}
  </Grid>
);

export default CommentList;
