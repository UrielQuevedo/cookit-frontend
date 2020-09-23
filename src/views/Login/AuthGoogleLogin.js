import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { Grid } from '@material-ui/core';
import { loginSocial } from '../../service/AuthService';
import { useHistory } from 'react-router-dom';

const AuthGoogleLogin = () => {

    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const { push } = useHistory();

    const responseGoogle = (response) => {
        console.log(response);
        const profile = response.profileObj;
        const googleAccount = {
            email: profile.email,
            name: profile.givenName,
            lastname: profile.familyName,
            imageUrl: profile.imageUrl
        }

        loginSocial(googleAccount)
        .then(response => {
            console.log(response);
            localStorage.setItem('authorization', response.token);
            push('/');
        })
    }

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
    )
}

export default AuthGoogleLogin;
