import {
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';
import CardRecipe from 'components/CardRecipe/card-recipe';
import { UserContext } from 'context/user-context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { me } from 'service/auth-service';

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const { email, lastname, name, imageUrl, favorites, recipes } = user;
  const [step, setStep] = useState(0);
  const { push } = useHistory();

  const changeStep = (event, newValue) => {
    setStep(newValue);
  };

  const logOut = () => {
    setUser({});
    window.localStorage.clear();
    push('/login');
  };

  useEffect(() => {
    me().then(user_ => setUser(user_));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ marginTop: '40px' }}>
      <Grid container item xs={12} justify="center">
        <Grid item xs={12} container justify="center">
          <img src={imageUrl} alt="foto de perfil del usuario" />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="center"
          direction="column"
          style={{ textAlign: 'center', padding: '20px' }}
        >
          <Typography variant="h6">
            {name} {lastname}
          </Typography>
          <Typography variant="subtitle1">{email}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="center"
        style={{ marginTop: '10px' }}
      >
        <Grid item sm={3} xs={12}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            fullWidth
            onClick={logOut}
          >
            cerrar sesion
          </Button>
        </Grid>
      </Grid>
      <Grid container style={{ margin: '20px 0 20px 0' }}>
        <Paper square>
          <Tabs
            value={step}
            indicatorColor="primary"
            textColor="primary"
            onChange={changeStep}
            aria-label="disabled tabs example"
          >
            <Tab value={0} label="favoritos" />
            <Tab value={1} label="mis recetas" />
          </Tabs>
        </Paper>
      </Grid>
      <Grid container justify="center" spacing={3}>
        {((step === 0 ? favorites : recipes) || []).map((recipe, i) => (
          <Grid key={i} item xs={12} sm={3} style={{ marginBottom: '20px' }}>
            <CardRecipe {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default User;
