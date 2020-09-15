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
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { ChefHutSpinner, CookieSpiner } from '../components/Spinner';
import Searcher from '../components/Searcher/Searcher';

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
  }

  return (
    <Container className={classes.root}>
      <Grid justify="center" direction="column" >
        <Grid item style={{ margin: '10px' }}><img src="/banner.png" alt="banner de la pagina"/></Grid>
        <Grid item container justify="center" style={{ margin: '10px' }}>
        <Searcher fromHome={true}/>
        </Grid>
        <Grid item container justify="center" style={{ margin: '10px' }}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleNewRecipe}
          >
        publicar receta
        </Button>
        </Grid>
      </Grid>
      { loading }
      <GridList cellHeight={180} className={classes.gridList}>
        {recipes.map(({ imageUrl, name }, i) => (
          <GridListTile key={i}>
            <img src={imageUrl} alt={name} />
            <GridListTileBar
              title={name}
              actionIcon={
                <IconButton aria-label={name} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

export default Home;
