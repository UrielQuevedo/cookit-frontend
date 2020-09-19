import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

const UserInformation = ({ name, create_at }) => {
  return (
    <Grid
      item
      xs={12}
      className="plr-20 mtb-20"
      alignItems="center"
      justify="center"
      container
    >
      <Grid item xs={12} sm={1} container justify="center" className="mt-10">
        <Avatar
          aria-label="recipe"
          style={{ background: 'red'}}
        >
          U
        </Avatar>
      </Grid>
      <Grid item xs={12} sm={8} className="mt-10">
        <Typography variant="h7" className="fw-500">{name}</Typography>
        <Typography variant="subtitle2" className="fw-200">
          Publicado: {create_at}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} container justify="flex-end" className="mt-10">
        <Button variant="contained" size="medium" disabled fullWidth>
          Seguir
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserInformation;