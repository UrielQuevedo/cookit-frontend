import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { registerRequest } from '../../service/auth-service';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();

  const sendRegisterForm = async (data, e) => {
    if (data.password === data.password_confirmed) {
      setLoading(true);
      const sendData = {
        email: data.email,
        name: data.name,
        lastname: data.lastname,
        password: data.password
      };
      try {
        const _ = await registerRequest(sendData);
        push('/login');
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    } else {
      setError('Las contraseñas no coinciden');
    }
    e.target.reset();
  };

  const checkStatusAndRedirect = response => {
    if (response.status == 409) {
      setError(response.data.message);
    } else {
      push('/login');
    }
  };

  return (
    <Grid container justify="center" style={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        container
        direction="column"
        justify="center"
        xs={12}
        lg={6}
        style={{ background: '#da4453' }}
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          lg={6}
          className="login-box"
        >
          <Typography component="h2" align="center" variant="h3">
            Crear Cuenta
          </Typography>
          <form onSubmit={handleSubmit(sendRegisterForm)}>
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
              label="Nombre"
              name="name"
              type="text"
              id="name"
            />
            <TextField
              margin="normal"
              inputRef={register}
              fullWidth
              required
              label="Apellido"
              name="lastname"
              type="text"
              id="lastname"
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
            />
            <TextField
              margin="normal"
              inputRef={register}
              fullWidth
              required
              label="Confirmar Contraseña"
              name="password_confirmed"
              type={showPassword ? 'text' : 'password'}
              id="password_confirmed"
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
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}
            <Box style={{ position: 'relative' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                color="primary"
              >
                Registrarse
              </Button>
              {loading && (
                <CircularProgress
                  style={{ position: 'absolute', top: '37%', left: '47%' }}
                  size={24}
                />
              )}
            </Box>
            <Grid container justify="center" style={{ marginBottom: '20px' }}>
              <div>
                ¿Ya tienes una cuenta?
                <Link to="/login" style={{ marginLeft: '5px' }}>
                  Iniciar Sesión
                </Link>
              </div>
            </Grid>
          </form>
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

export default Register;
