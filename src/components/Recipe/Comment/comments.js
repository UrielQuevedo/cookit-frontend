import React from 'react';
import { Grid } from '@material-ui/core';
import Comment from './card-comment';
import InfiniteScroll from '../../infinite-scroll';

const Comments = ({ comments, getPaginationComments, pagination }) => {
 
  return (
    <Grid item container xs={12} className="plr-20">
      {comments.map((comment, index) => (
        <Grid key={index} item xs={12}>
          <Comment comment={comment} />
          {index + 1 === comments.length && (
                <InfiniteScroll
                  handleScroll={getPaginationComments}
                  hasMore={pagination.page < pagination.totalPages}
                />
          )}
        </Grid>
      ))}
    </Grid>
  )
};

export default Comments;
