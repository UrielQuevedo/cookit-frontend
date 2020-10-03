import React, { useState } from 'react';
import { Grid, TextField, Avatar, InputAdornment, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const AddComment = () => {

    const [comment, setComment] = useState(null);

    const handleInput = (e) => {
      console.log(e.target.value);
    }

    const handleComment = () => {
      console.log("click");
    }

    return (
      <Grid item container xs={12} className="plr-20">
        <Grid item xs={1}>
        <Avatar 
          aria-label="userImage" 
          style={{ background: 'red', marginTop: '5px', marginRight: '5px' }}>
          D
        </Avatar>
        </Grid>
        <Grid item xs={11}>
          <TextField
            id="outlined-textarea"
            placeholder="Escribe un comentario..."
            multiline
            variant="outlined"
            fullWidth
            size="medium"
            onChange={handleInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="add-comment">
                    <SendIcon onClick={handleComment}/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    )
}

export default AddComment;