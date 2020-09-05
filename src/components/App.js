import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../service/RecipeService';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar, IconButton, Container } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    color: 'red',
  }
}));

function App() {

  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then((r) => setRecipes(r));
  }, []);

  return (
    <Container className={classes.root}>
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
}

export default App;
