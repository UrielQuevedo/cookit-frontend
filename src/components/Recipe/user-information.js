import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const FOLLOW_BUTTON_NAME = 'seguir';
const PUBLISHED_TITLE = 'Publicado: ';

const UserInformation = ({ name, create_at }) => (
  <Grid
    item
    xs={12}
    className="plr-20 mtb-20"
    alignItems="center"
    justify="center"
    container
  >
    <Grid item xs={12} sm={1} container justify="center" className="mt-10">
      <Avatar aria-label="recipe" style={{ background: 'red' }}>
        U
      </Avatar>
    </Grid>
    <Grid item xs={12} sm={8} className="mt-10">
      <Typography className="fw-500">{name}</Typography>
      <Typography variant="subtitle2" className="fw-200">
        {PUBLISHED_TITLE} {create_at}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3} container justify="flex-end" className="mt-10">
      <Button variant="contained" size="medium" disabled fullWidth>
        {FOLLOW_BUTTON_NAME}
      </Button>
    </Grid>
  </Grid>
);

UserInformation.propTypes = {
  create_at: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default UserInformation;
