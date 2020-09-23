import React, { useContext, useState } from 'react';
import { Box, Button, Checkbox, CircularProgress, CssBaseline, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import AuthGoogleLogin from './AuthGoogleLogin';
import '../Login/Login.css';
const Login = () => {

  //TODO el remember funcione
  const [ isRemember, setIsRemember ] = useState(false);
  const [ error, setError ] = useState();
  const [ loading, setLoading  ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const responseGoogle = (response) => {
      console.log(response);
  }

  return (
    <Grid container justify="center">
      <CssBaseline />
      <Grid
        container
        item
        lg={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container direction="column" justify="center" alignItems="center" className="login-box">
          <Typography
            component="h2"
            align="center"
            variant="h3"
          >
            Iniciar Sesión
          </Typography>
          <form>
            <TextField
              margin="normal"
              fullWidth
              required
              label="Correo Electronico"
              name="email"
              type="email"
              id="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              fullWidth
              required
              label="Contraseña"
              name="password"
              type={ showPassword ? 'text' : 'password' }
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
              style={{ marginTop:'15px' }}
            />
            { error && <Alert variant="filled" severity="error" style={{ marginTop:'15px' }}>{error}</Alert> }
            <Box style={{ position:'relative' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                style={{ margin: '20px 0 0 0'}}
                >
                Iniciar sesión
              </Button>
             
            </Box>
           
            <Grid container justify="center" style={{ fontSize: '20px' }}>
              <p>o</p>
            </Grid>

            <AuthGoogleLogin />

            <Grid container justify="center" style={{ marginBottom:'20px' }}>
              <div>
                ¿No tienes una cuenta?
                <Link to="/register" style={{marginLeft:'5px'}}>
                  Regístrate
                </Link>
              </div>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;