import React, { useContext } from 'react';
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  makeStyles,
  Button,
  Grow
} from '@material-ui/core';
import useTimeAgo from 'hooks/useTimeAgo';
import AvatarImage from 'components/User/avatar-image';
import { UserContext } from 'context/user-context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  paper: {
    maxWidth: '100%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

const Comment = ({ comment }) => {
  const { message, created_at, owner } = comment;
  const { imageUrl, name, lastname, idUser } = owner;
  const { user } = useContext(UserContext);
  const time = useTimeAgo(new Date(created_at));
  const classes = useStyles();

  return (
    <Grow in>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <AvatarImage
                name={name}
                lastname={lastname}
                imageUrl={imageUrl}
              />
            </Grid>
            <Grid item xs>
              <Typography style={{ fontWeight: 'bold' }}>
                {name} {lastname}
                <Typography variant="caption" style={{ marginLeft: '5px' }}>
                  {idUser === user.id && '(Tú)'}
                </Typography>
              </Typography>
              <Typography style={{ color: 'grey', marginBottom: '5px' }}>
                {time}
              </Typography>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Grow>
  );
};

export default Comment;
