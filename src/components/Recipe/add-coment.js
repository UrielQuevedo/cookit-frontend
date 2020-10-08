import React, { useState, useContext } from 'react';
import { Grid, TextField, Avatar, InputAdornment, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { postNewComment } from '../../service/recipe-service';
import { UserContext } from 'context/user-context';

const AddComment = ({ idRecipe, setComments }) => {

    const [ comment, setComment ] = useState('');
    const user = useContext(UserContext);

    const handleInput = (e) => {
      setComment(e.target.value);
    }

    const handleSubmit = event => {
      event.preventDefault();
      const request = { message: comment, idRecipe: idRecipe, idUser: user.user.id }
      postNewComment(request)
      .then(newComment => {
        setComments(oldComments => {
          let comments_ = oldComments.map(comment => comment);
          comments_.push(newComment);
          return comments_;
        })
      })
      event.target.reset();
    }
    
    return (
      <Grid item container xs={12} className="plr-20">
        <Grid item xs={1}>
        <Avatar 
          aria-label="userImage" 
          style={{ background: 'blue', marginTop: '5px', marginRight: '5px' }}>
           {`${user.user.name[0]}${user.user.lastname[0]}`}
        </Avatar>
        </Grid>
        <Grid item xs={11}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-textarea"
              placeholder="Escribe un comentario..."
              multiline
              variant="outlined"
              size="medium"
              fullWidth
              required="true"
              onChange={handleInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="add-comment" type="submit">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Grid>
      </Grid>
    )
}

export default AddComment;