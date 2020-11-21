import {
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  Avatar
} from '@material-ui/core';
import CardRecipe from 'components/CardRecipe/card-recipe';
import Follows from '../components/Dialog/Follows';
import { UserContext } from 'context/user-context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { me } from 'service/auth-service';
import { deleteFollowUser } from 'service/user-service';
import './User.css';
import Favorites from 'components/Favorites/favorites';
import { Alert } from '@material-ui/lab';

const FOLLOWEDS_TITLE = 'seguidos';
const FOLLOWERS_TITLE = 'seguidores';

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const {
    id,
    email,
    lastname,
    name,
    imageUrl,
    favorites,
    recipes,
    followeds,
    followers,
    description
  } = user;
  const [step, setStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [modalType, setModalType] = useState();
  const [_recipes, setRecipes] = useState(recipes);
  const { push } = useHistory();

  const changeStep = (event, newValue) => {
    setStep(newValue);
  };

  useEffect(() => {
    me().then(myUser => {
      setUser(myUser);
      setRecipes(myUser.recipes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openFolloweds = () => {
    if (followeds.length === 0) return;
    setModalType(FOLLOWEDS_TITLE);
    setOpenModal(true);
    setModalContent(followeds);
  };

  const openFollowers = () => {
    if (followers.length === 0) return;
    setModalType(FOLLOWERS_TITLE);
    setOpenModal(true);
    setModalContent(followers);
  };

  const logOut = () => {
    setUser({});
    window.localStorage.clear();
    push('/login');
  };

  const deleteFriend = followId => () => {
    deleteFollowUser(id, followId);
    const filter = followeds.filter(u => u.id !== followId);
    setUser(_user => ({ ..._user, followeds: filter }));
    if (filter.length === 0) setOpenModal(false);
    setModalContent(filter);
  };

  return (
    <Container style={{ marginTop: '40px' }}>
      <Grid container xs={12} justify="center">
        <Grid container item sm={8} xs={12} justify="center">
          <Grid item sm={2} xs={12} container justify="center">
            {imageUrl ? (
              <img
                src={imageUrl}
                style={{
                  width: '125px',
                  height: '125px',
                  borderRadius: '65px'
                }}
                alt="foto de perfil del usuario"
              />
            ) : (
              <Avatar
                aria-label="recipe"
                className="cardRecipe-avatar"
                style={{
                  width: '125px',
                  height: '125px',
                  borderRadius: '65px',
                  background: 'red',
                  fontSize: '70px'
                }}
              >
                {`${name[0]}${lastname[0]}`}
              </Avatar>
            )}
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            container
            justify="center"
            direction="column"
            style={{ textAlign: 'left', padding: '20px' }}
          >
            <Typography variant="h6">
              {name} {lastname}
            </Typography>
            <Typography variant="subtitle1">{email}</Typography>
            <Grid item style={{ marginBottom: '20px' }}>
              <span className="count-recipes">{_recipes?.length} recetas</span>
              <Button onClick={openFollowers}>
                {followers?.length} {FOLLOWERS_TITLE}
              </Button>
              <Button onClick={openFolloweds}>
                {followeds?.length} {FOLLOWEDS_TITLE}
              </Button>
            </Grid>
            <Button onClick={logOut} color="secondary" variant="contained">
              Salir
            </Button>
          </Grid>
          <Grid
            item
            sm={8}
            xs={12}
            container
            justify="center"
            style={{ marginTop: '20px', textAlign: 'center' }}
          >
            <Typography variant="body">{description}</Typography>
          </Grid>
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
            <Tab value={0} label="mis recetas" />
            <Tab value={1} label="favoritos" />
          </Tabs>
        </Paper>
      </Grid>
      <Grid container justify="center" spacing={3}>
        {step === 1 ? (
          <Favorites favorites={favorites} />
        ) : (
          <>
            {(_recipes.length === 0 && (
              <Alert color="warning">No publicaste ninguna receta.</Alert>
            )) ||
              _recipes.map((recipe, i) => (
                <Grid
                  key={i}
                  item
                  xs={12}
                  sm={3}
                  style={{ marginBottom: '20px' }}
                >
                  <CardRecipe recipe={recipe} setRecipes={setRecipes} />
                </Grid>
              ))}
          </>
        )}
      </Grid>
      <Follows
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        modalContent={modalContent}
        modalType={modalType}
        deleteFriend={deleteFriend}
      />
    </Container>
  );
};

export default User;
