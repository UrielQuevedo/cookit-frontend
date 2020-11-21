import React, { useState, useContext } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link, useHistory } from 'react-router-dom';
import AuthGoogleLogin from './auth-google-login';
import { login } from '../../service/auth-service';
import { AuthContext } from '../../context/auth-context';
import { useForm } from 'react-hook-form';
import { ChefHutSpinner } from '../../components/spinner';
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
  Hidden
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import '../Login/Login.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const { setAuth } = useContext(AuthContext);
  const { push } = useHistory();

  const sendLoginForm = async (data, e) => {
    setLoading(true);
    const response = await login(data);
    checkStatusAndRedirect(response);
    setLoading(false);
    e.target.reset();
  };

  const checkStatusAndRedirect = response => {
    if (response.status === 409 || response.status === 404) {
      setError(response.data.message);
    } else {
      localStorage.setItem('authorization', response.token);
      setAuth({ type: 'LOG_IN', isRemember: true, id: response.id });
      push('/');
    }
  };

  return (
    <Grid container justify="center" style={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        container
        justify="center"
        xs={12}
        lg={6}
        style={{ background: '#da4453' }}
      >
        <Grid
          container
          item
          lg={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="login-box"
          >
            <Typography component="h2" align="center" variant="h3">
              Iniciar Sesión
            </Typography>
            <form onSubmit={handleSubmit(sendLoginForm)}>
              <TextField
                margin="normal"
                inputRef={register}
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
                inputRef={register}
                fullWidth
                required
                label="Contraseña"
                name="password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {error && (
                <Alert
                  variant="filled"
                  severity="error"
                  style={{ marginTop: '15px' }}
                >
                  {error}
                </Alert>
              )}
              <Box style={{ position: 'relative' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  style={{ margin: '20px 0 20px 0' }}
                >
                  Iniciar sesión
                </Button>
                {loading && (
                  <CircularProgress
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginLeft: '-12px',
                      marginTop: '-12px'
                    }}
                    size={24}
                  />
                )}
              </Box>

              <Grid item xs={12} style={{ marginTop: '10px' }}>
                <div style={{ textAlign: 'center' }}>O</div>
              </Grid>

              <Grid item={12}>
                <AuthGoogleLogin />
              </Grid>

              <Grid container justify="center" style={{ marginBottom: '20px' }}>
                <div>
                  ¿No tienes una cuenta?
                  <Link to="/register" style={{ marginLeft: '5px' }}>
                    Regístrate
                  </Link>
                </div>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          xs={6}
          direction="column"
        >
          <img
            src="/recetas.svg"
            alt=""
            height="40%"
            style={{ marginTop: '6.5rem' }}
          />
          <h1
            style={{
              fontSize: '5rem',
              marginTop: '2rem',
              textAlign: 'center',
              color: '#da4453'
            }}
          >
            Cookit
          </h1>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Login;
