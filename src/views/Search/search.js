import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import CardRecipe from '../../components/CardRecipe/card-recipe';
import SearchHeader from '../../components/search-header';
import { getAllRecipes } from '../../service/recipe-service';
import LayoutLoading from '../../components/layout-loading';
import LayoutAlert from '../../components/layout-alert';

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

const Search = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalPages: 1,
    totalElements: '?'
  });
  const query = new URLSearchParams(window.location.search);
  const search = query.get('search');

  const getPaginationRecipes = async ({ page, size }) => {
    const { content, totalElements, totalPages, number } = await getAllRecipes({
      page,
      size,
      search
    });
    setPagination(pagination_ => ({
      ...pagination_,
      totalPages,
      totalElements,
      page: number + 1
    }));
    setRecipes(content);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPaginationRecipes({ ...pagination, page: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Container className={classes.root}>
      <SearchHeader />
      <LayoutLoading loading={loading}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Busqueda realizada por "{search}"
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LayoutAlert
              isAlert={recipes <= 0}
              type="warning"
              message="No se encontraron recetas en la busqueda."
            />
          </Grid>
          {recipes.map((recipe, i) => (
            <Grid item key={i} xs={12} sm={3} style={{ marginBottom: '20px' }}>
              <CardRecipe {...recipe} />
            </Grid>
          ))}
        </Grid>
      </LayoutLoading>
    </Container>
  );
};

export default Search;
