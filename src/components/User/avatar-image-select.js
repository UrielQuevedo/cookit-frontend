import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AvatarImageSelect = ({ imageUrl, name, lastname, handleChangeUserValue }) => {
 
  const [_imageUrl, setImageUrl] = useState(imageUrl);

  const readFile = () => {
      var file = document.querySelector('input[type=file]')['files'][0];
      var reader = new FileReader();
      var baseString;
      reader.onloadend = function () {
          baseString = reader.result;
          if (_imageUrl == null) {
            setImageUrl(baseString);
          }
          const imageUser = document.getElementById('imageUser')
          imageUser.src = baseString;
          handleChangeUserValue("imageUrl", baseString);
      };
      reader.readAsDataURL(file);
    }
   
  const openDialog = () => {
    document.getElementById('openStorage').click();
  }
  
  return (
    <>
      {_imageUrl ? (
        <div style={{ textAlign: 'center' }}>
          <input 
          accept="image/*"
          id='openStorage' 
          type='file' 
          name='filename'
          hidden 
          onChange={readFile}
          />
          <button type="button" onClick={openDialog} style={{ border: 'none', background: '#FD5252' }}>
            <img
              id='imageUser'
              src={_imageUrl}
              width="80"
              height="80"
              style={{ borderRadius: '20px' }}
              alt="perfil del usuario"
            >
            </img>
          </button>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <input 
          accept="image/*"
          id='openStorage' 
          type='file' 
          name='filename' 
          hidden 
          onChange={readFile}/>
          <button type="button" onClick={openDialog} style={{ border: 'none', background: '#FD5252' }}>
              <Avatar
              aria-label="recipe"
              style={{ background: 'red', borderRadius: '20px', width: '80px', height: '80px' }}
              
            >
              {`${name[0]}${lastname[0]}`}
            </Avatar>
          </button>
        </div>
        )}
    </>
  )
};

AvatarImageSelect.propTypes = {
  imageUrl: PropTypes.string,
  lastname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default AvatarImageSelect;
