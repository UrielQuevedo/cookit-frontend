import React, { useState, useContext } from 'react';
import {
  Grid,
  TextField,
  Avatar,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { postNewComment } from 'service/recipe-service';
import { UserContext } from 'context/user-context';
import AvatarImage from 'components/User/avatar-image';

const TEXT_COMMENT_LIMIT = 200;

const AddComment = ({ idRecipe, setComments, onSubmit = null }) => {
  const [comment, setComment] = useState('');
  const { user } = useContext(UserContext);
  const { name, lastname, imageUrl, id } = user;
  const [count, setCount] = useState(TEXT_COMMENT_LIMIT);

  const handleInput = event => {
    const { value } = event.target;
    setCount(TEXT_COMMENT_LIMIT - value.length);
    setComment(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (onSubmit !== null) {
      onSubmit({ comment });
    } else {
      const request = {
        message: comment,
        idRecipe,
        idUser: id
      };
      postNewComment(request).then(newComment => {
        setComments(oldComments => {
          let comments_ = oldComments.map(comment => comment);
          comments_.push(newComment);
          return comments_;
        });
      });
      setCount(TEXT_COMMENT_LIMIT);
      event.target.reset();
    }
  };

  return (
    <Grid
      item
      container
      xs={12}
      className="plr-20"
      style={{ margin: '35px 0' }}
    >
      <Grid
        item
        xs={1}
        container
        justify="center"
        direction="column"
        alignItems="center"
      >
        <AvatarImage name={name} lastname={lastname} imageUrl={imageUrl} />
        {count < 50 ? (
          <p style={{ color: 'red' }}>{count}</p>
        ) : (
          <p style={{ color: 'green' }}>{count}</p>
        )}
      </Grid>
      <Grid item xs={11}>
        <form onSubmit={handleSubmit} data-testid="addCommentForm">
          <TextField
            id="outlined-textarea"
            data-testid="comment"
            placeholder="Escribe un comentario..."
            multiline
            variant="outlined"
            size="medium"
            fullWidth
            required="true"
            onChange={handleInput}
            InputProps={{
              inputProps: { maxLength: TEXT_COMMENT_LIMIT },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="add-comment" type="submit">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default AddComment;
