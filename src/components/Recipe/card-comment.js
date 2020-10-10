import React from 'react';
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import useTimeAgo from 'hooks/useTimeAgo';

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
  const time = useTimeAgo(new Date(created_at));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar style={{ background: 'red' }}>
              {`${owner.name[0]}${owner.lastname[0]}`}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography style={{ fontWeight: 'bold' }}>
              {owner.name} {owner.lastname}
            </Typography>
            <Typography style={{ color: 'grey', marginBottom: '5px' }}>
              {time}
            </Typography>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Comment;
