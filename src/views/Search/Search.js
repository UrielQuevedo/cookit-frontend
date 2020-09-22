import React, { useState } from 'react';
import Searcher from '../../components/Searcher/Searcher';
import { makeStyles } from '@material-ui/core/styles';
import {
  GridListTileBar,
  IconButton,
  Container,
  Button,
  Grid,
} from '@material-ui/core';
import { getRecipesByQuery } from '../../service/RecipeService';
import CardRecipe from '../../components/CardRecipe/CardRecipe';

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

const Search = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState(null);

  return (
    <Container className={classes.root}>
      <Grid justify="center" direction="column">
        <p
          style={{
            fontSize: '45px',
            margin: '4rem 0 4rem 0',
            textAlign: 'center',
            fontFamily: 'Segoe UI semibold',
            color: '#4a4a4a',
          }}
        >
          ¿Que vas a cocinar hoy?
        </p>
        <Grid item xs={12} justify="center" style={{ margin: '20px 0 20px 0' }}>
          <Searcher fromHome={true} />
        </Grid>
      </Grid>
      {recipes && (
        <Grid container justify="center" spacing={3}>
          {recipes.map((recipe, i) => (
            <Grid item key={i} xs={12} sm={3} style={{ marginBottom: '20px' }}>
              <CardRecipe {...recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Search;
