import React, { useContext, useState } from 'react';
import { getAllRecipes, getAllFollowersRecipes } from 'service/recipe-service';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Grid, Paper, Tabs, Tab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import SearchHeader from 'components/search-header';
import Recipes from 'components/Recipes/recipes';
import { UserContext } from 'context/user-context';
import { TabPanel } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  title: {
    color: 'red'
  },
  button: {
    margin: '10px 0 10px 0'
  }
}));

const BUTTON_NEW_RECIPE_NAME = 'publicar receta';

const Home = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const [tabSelected, setTabSelected] = useState(0);
  const { user } = useContext(UserContext);

  const handlePushToNewRecipe = () => {
    push('/recipes/new');
  };

  return (
    <Container className={classes.root}>
      <SearchHeader />
      <Grid container justify="center" direction="column">
        <Grid
          item
          container
          justify="center"
          style={{ margin: '20px 0 20px 0' }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handlePushToNewRecipe}
          >
            {BUTTON_NEW_RECIPE_NAME}
          </Button>
        </Grid>
      </Grid>
      <Grid container style={{ margin: '20px 0 20px 0' }}>
        <Paper square>
          <Tabs
            value={tabSelected}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, value) => setTabSelected(value)}
          >
            <Tab label="recientes" value={0} />
            <Tab label="seguidores" value={1} />
          </Tabs>
        </Paper>
      </Grid>
      {tabSelected === 0 && <Recipes fetchData={getAllRecipes} />}
      {tabSelected === 1 && (
        <Recipes fetchData={() => getAllFollowersRecipes(user.id)} />
      )}
    </Container>
  );
};

export default Home;
