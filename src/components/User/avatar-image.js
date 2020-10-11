import { Avatar } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const AvatarImage = ({ imageUrl, name, lastname }) => (
  <>
    {imageUrl ? (
      <img
        src={imageUrl}
        width="40"
        style={{ borderRadius: '20px' }}
        alt="perfil del usuario"
      />
    ) : (
      <Avatar
        aria-label="recipe"
        className="cardRecipe-avatar"
        style={{ background: 'red' }}
      >
        {`${name[0]}${lastname[0]}`}
      </Avatar>
    )}
  </>
);

AvatarImage.propTypes = {
  imageUrl: PropTypes.string,
  lastname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default AvatarImage;
