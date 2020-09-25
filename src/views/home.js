import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../service/recipe-service';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Grid,
  Paper,
  Tabs,
  Tab,
  Grow
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import CardRecipe from '../components/CardRecipe/card-recipe';
import InfiniteScroll from '../components/infinite-scroll';
import LayoutLoading from '../components/layout-loading';
import SearchHeader from '../components/search-header';

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
const NUMBER_OF_TRANSITION = 100;

const Home = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const { push } = useHistory();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalPages: 1,
    totalElements: '?'
  });

  const getPaginationRecipes = async () => {
    const { page, size } = pagination;
    const { content, totalElements, totalPages } = await getAllRecipes({
      page,
      size
    });
    setPagination(pagination_ => ({
      ...pagination_,
      totalPages,
      totalElements,
      page: pagination_.page + 1
    }));
    setRecipes(recipes_ => [...recipes_, ...content]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPaginationRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePushToNewRecipe = () => {
    push('/recipes/new');
  };

  return (
    <Container className={classes.root}>
      <SearchHeader />
      <Grid justify="center" direction="column">
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
      <LayoutLoading loading={loading}>
        <Grid container justify="center" spacing={3}>
          {recipes.map((recipe, i) => (
            <>
              <Grow in key={i} {...{ timeout: i * NUMBER_OF_TRANSITION }}>
                <Grid item xs={12} sm={3} style={{ marginBottom: '20px' }}>
                  <CardRecipe {...recipe} />
                </Grid>
              </Grow>
              {i + 1 === recipes.length && (
                <InfiniteScroll
                  handleScroll={getPaginationRecipes}
                  hasMore={pagination.page < pagination.totalPages}
                />
              )}
            </>
          ))}
        </Grid>
      </LayoutLoading>
    </Container>
  );
};

export default Home;
