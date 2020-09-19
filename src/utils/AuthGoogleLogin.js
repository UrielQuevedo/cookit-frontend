import { yellow } from '@material-ui/core/colors';
import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { Grid } from '@material-ui/core';
import '../views/Login/Login.css';

const AuthGoogleLogin = () => {

    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const responseGoogle = (response) => {
        console.log(response);
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
