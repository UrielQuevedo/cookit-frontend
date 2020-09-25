import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { Grid } from '@material-ui/core';
import { loginSocial } from '../../service/auth-service';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const AuthGoogleLogin = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const { push } = useHistory();
  const { setAuth } = useContext(AuthContext);

  const successfullLoginSocial = response => {
    localStorage.setItem('authorization', response.token);
    setAuth({ type: 'LOG_IN', isRemember: true, id: response.id });
    push('/');
  };

  const responseGoogle = response => {
    const profile = response.profileObj;
    const googleAccount = {
      email: profile.email,
      name: profile.givenName,
      lastname: profile.familyName,
      imageUrl: profile.imageUrl
    };

    loginSocial(googleAccount).then(response_ =>
      successfullLoginSocial(response_)
    );
  };

  return (
    <Grid container justify="center" style={{ marginBottom: '20px' }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continuar con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="buttonGoogle"
      />
    </Grid>
  );
};

export default AuthGoogleLogin;
