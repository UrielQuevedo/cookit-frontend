import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../service/RecipeService';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {
  GridListTileBar,
  IconButton,
  Container,
  Button,
  Grid,
  Paper, Tabs, Tab, Grow
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { ChefHutSpinner, CookieSpiner } from '../components/Spinner';
import Searcher from '../components/Searcher/Searcher';
import CardRecipe from '../components/CardRecipe/CardRecipe';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    color: 'red',
  },
  button: {
    margin: '10px 0 10px 0',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const { push } = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllRecipes()
      .then((r) => setRecipes(r))
      .finally((_) => setLoading(false));
  }, []);

  const handleNewRecipe = () => {
    push('/recipes/new');
  };

  return (
    <Container className={classes.root}>
      <Grid justify="center" direction="column">
        <p style={{ fontSize:'45px', margin:'4rem 0 4rem 0', textAlign:'center', fontFamily: 'Segoe UI semibold', color:'#4a4a4a'}}>¿Que vas a cocinar hoy?</p>
        <Grid item xs={12} justify="center" style={{ margin: '20px 0 20px 0' }}>
          <Searcher fromHome={true} />
        </Grid>
        <Grid item container justify="center" style={{ margin: '20px 0 20px 0' }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleNewRecipe}
          >
            publicar receta
          </Button>
        </Grid>
      </Grid>
      <Grid container style={{ margin:'20px 0 20px 0' }}>
        <Paper square>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            onChange={() => undefined}
            aria-label="disabled tabs example"
          >
            <Tab label="utimas" />
            <Tab label="seguidores" disabled />
          </Tabs>
        </Paper>
      </Grid>
      <Grid container justify="center" spacing={3}>
        {recipes.map((recipe, i) => (
          <Grow in={true} key={i} {...{ timeout: 1000 + i * 400 }}>
            <Grid item xs={12} sm={3} style={{ marginBottom: '20px' }}>
              <CardRecipe {...recipe} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
