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
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import '../Login/Login.css';

const Login = () => {

  const [ loading, setLoading  ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);
  const { register, handleSubmit } = useForm();
  const [ error, setError ] = useState();
  const { setAuth } = useContext(AuthContext);
  const { push } = useHistory();

  const sendLoginForm = async (data, e) => {
    setLoading(true);
    try {
      const userData = await login(data);
      localStorage.setItem('authorization', userData.token);
      setAuth({ type:'LOG_IN', isRemember:true, id: userData.id });
      push('/');
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
    }
    setLoading(false);
    e.target.reset();
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
            { error && <Alert variant="filled" severity="error" style={{ marginTop:'15px' }}>{error}</Alert> }
            <Box style={{ position: 'relative' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                style={{ margin: '20px 0 0 0' }}
              >
                Iniciar sesión
              </Button>
            </Box>

            { loading && <ChefHutSpinner style={{ position:'absolute', top:'50%', left:'50%', marginLeft:'-12px', marginTop:'-12px'  }} size={24} /> }

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
