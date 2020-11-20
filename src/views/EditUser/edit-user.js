import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from 'context/user-context';
import { useHistory } from 'react-router-dom';
import { me } from 'service/auth-service';
import { Button, CircularProgress, Divider, Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DataContainerProfile from './data-container-profile';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const EditUser = () => {
  const { user, setUser } = useContext(UserContext);

  const defaultValuesToEdit = (data) => {
    return {
      email: data.email,
      name: data.name,
      lastname: data.lastname,
      imageUrl: data.imageUrl,
      currentPassword: '',
      newPassword: ''
    }
  }

  const [ userToEdit, setUserToEdit ] = useState(defaultValuesToEdit(user));
  const [ showPassword, setShowPassword ] = useState(false);
  const { error, setError } = useState('');

  useEffect(() => {
    me().then(myUser => {
      console.log(myUser)
      setUser(myUser);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeUserValue = (type, value) => {
    setUserToEdit({ ...userToEdit, [type]: value });
  }

  const inputPropsShowPassword = () => {
    return {
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
    }
  }

  const customInput = (title, type, defaultValue, placeholder) => {
    return (
      <div>
        <div style={{ marginBottom:'5px', color:'#ffff' }}>
          { title }
        </div>
        <TextField
          type={type}
          placeholder={placeholder}
          size="small"
          className="form-item"
          variant="outlined"
          onChange={(e) => handleChangeUserValue(defaultValue, e.target.value)}
          value={userToEdit[defaultValue]}
        />
      </div>
    );
  }

  const settingView = () => {
    return (
      <Grid container item justify="center" style={{padding:'10px'}}>
        <Grid container item justify="center" className="container-form" direction="column">
          <form onSubmit={() => console.log("nada")}>
            {customInput("Email", "email", "email")}
            {customInput("Nombre", "text", "name")}
            {customInput("Apellido", "text", "lastname")}
            {customInput("Imagen", "text", "imageUrl")}
            {customInput("Nueva Contraseña", "password", "password", "Ingresar contraseña")}
            <Divider style={{ background:'#ffff' }} variant="middle" />
            <div>
              <p style={{fontSize:'18px', color:'#ffff'}}>
                Para confirmar los cambios debe ingresar la contraseña actual
              </p>
              <TextField
                type={ showPassword ? "text" : "password" }
                required size="small"
                className="form-item"
                variant="outlined"
                placeholder="Ingresar contraseña actual"
                onChange={(e) => handleChangeUserValue("currentPassword", e.target.value)}
                InputProps={inputPropsShowPassword()}
              />
              { error && <div style={{ color:'#ffff', display:'flex', borderLeft:'3px solid #ffff' }}> <HighlightOffIcon style={{ color:'#ffff', margin:'0 5px 0 5px' }} />  { error }. </div>}
            </div>
            <Grid container item justify="flex-end" style={{ marginBottom:'10px' }}>
              { //userEditLoading && <CircularProgress size={28} style={{ color:'#ffff', marginRight:'15px', position:'relative', top:'3px' }} /> 
              }
              { //isCorrectly && !userEditLoading && <CheckCircleOutlineIcon style={{ color:'#0f0', position:'relative', marginRight:'10px', top:'5px', transform:'scale(1.2)' }} /> 
              }
              <Button type="submit" variant="contained" color="primary">
                Aceptar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container justify="center" direction="row" style={{ marginTop:'2.5rem', display:'flex', marginBottom:'30px' }}>
      <Grid container item xs={9} justify="center">
        <DataContainerProfile title="Información personal" view={settingView} />
      </Grid>
    </Grid>
  )
};

export default EditUser;
