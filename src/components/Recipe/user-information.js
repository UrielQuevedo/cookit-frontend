import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AvatarImage from 'components/User/avatar-image';
import { deleteFollowUser, postFollowUser } from 'service/user-service';
import { UserContext } from 'context/user-context';
import ButtonFollow from './button-follow';

const FOLLOW_BUTTON_NAME = 'seguir';
const PUBLISHED_TITLE = 'Publicado: ';
const UNFOLLOW_BUTTON_NAME = 'eliminar';

const UserInformation = ({ user, created_at }) => {
  const { user: myUser, setUser } = useContext(UserContext);

  const followUser = () => {
    postFollowUser(myUser.id, user.id);
    setUser(u => ({ ...u, followeds: [...u.followeds, user] }));
  };

  const unFollowUser = () => {
    deleteFollowUser(myUser.id, user.id);
    const filter = myUser.followeds.filter(u => u.id !== user.id);
    setUser(_user => ({ ..._user, followeds: filter }));
  };

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
        {myUser.id !== user.id &&
        (myUser.followeds || []).some(u => u.id === user.id) ? (
          <ButtonFollow
            onClick={unFollowUser}
            title={UNFOLLOW_BUTTON_NAME}
            color="secondary"
          />
        ) : (
          <ButtonFollow
            onClick={followUser}
            title={FOLLOW_BUTTON_NAME}
            color="primary"
          />
        )}
      </Grid>
    </Grid>
  );
};

UserInformation.propTypes = {
  created_at: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default UserInformation;
