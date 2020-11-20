import React, { useState, useContext } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link, useHistory } from 'react-router-dom';
import AuthGoogleLogin from './auth-google-login';
import { login } from '../../service/auth-service';
import { useAuthContext } from '../../context/auth-context';
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
  CircularProgress
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import '../Login/Login.css';

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const { setAuth } = useAuthContext();
  const { push } = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendLoginForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await login({ email, password});
      localStorage.setItem('authorization', response.token);
      setAuth({ type: 'LOG_IN', isRemember: true, id: response.id });
      push('/');
      event.target.reset();
    }
    catch (e) {
      setError(e.message);
    }

    setLoading(false);  
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
          <form onSubmit={sendLoginForm} data-testid="login-form">
            <TextField
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              margin="normal"
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
            {error && <Alert data-testid="login-error" variant="filled" severity="error" style={{ marginTop: '15px' }}>{error}</Alert>}
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
              {loading && <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: '-12px', marginTop: '-12px' }} size={24} />}
            </Box>

            <Grid item xs={12} style={{ marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                O
              </div>
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
  );
};

export default Login;
