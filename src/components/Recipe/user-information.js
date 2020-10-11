import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import AvatarImage from 'components/User/avatar-image';

const FOLLOW_BUTTON_NAME = 'seguir';
const PUBLISHED_TITLE = 'Publicado: ';

const UserInformation = ({ user, created_at }) => (
  <Grid
    item
    xs={12}
    className="plr-20 mtb-20"
    alignItems="center"
    justify="center"
    container
  >
    <Grid item xs={12} sm={1} container justify="center" className="mt-10">
      <AvatarImage
        name={user.name}
        lastname={user.lastname}
        imageUrl={user.imageUrl}
      />
    </Grid>
    <Grid item xs={12} sm={8} className="mt-10">
      <Typography className="fw-500">
        {user.name} {user.lastname}
      </Typography>
      <Typography variant="subtitle2" className="fw-200">
        {PUBLISHED_TITLE} {created_at}
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
  created_at: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default UserInformation;
