import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import SectionTitle from './section-title';
import Comment from './card-comment';

const TITLE = 'Comentarios';

const CommentList = ({ comments }) => {

    return (
        <Grid item container xs={12} className="plr-20">
          <SectionTitle title={`${TITLE} (${comments.length})`} />
          {comments.map((comment, index) => (
            <Grid item xs={12} >
              <Comment comment={comment}/>
            </Grid>
          ))}
        </Grid>
    )
}

export default CommentList;