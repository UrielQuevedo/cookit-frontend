import { Container, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CardRecipe from 'components/CardRecipe/card-recipe';
import { UserContext } from 'context/user-context';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFavoritesByCategory } from 'service/user-service';

const CategoryFavoritesPage = () => {
  const { idCategory } = useParams();
  const [category, setCategory] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getFavoritesByCategory(user.id, idCategory).then(category_ =>
      setCategory(category_)
    );
  }, []);

  return (
    <Container style={{ marginTop: '40px' }}>
      <Typography variant="h2" style={{ textTransform: 'capitalize' }}>
        {category.name}
      </Typography>
      <Grid
        container
        justify="center"
        spacing={3}
        style={{ marginTop: '25px' }}
      >
        {(category?.favorites || []).map((recipe, i) => (
          <Grid key={i} item xs={12} sm={3} style={{ marginBottom: '20px' }}>
            <CardRecipe recipe={recipe} setRecipes={() => {}} />
          </Grid>
        ))}
      </Grid>
      {category?.favorites?.length === 0 && (
        <Alert color="warning" style={{ marginTop: '25px' }}>
          {' '}
          No hay recetas añadidas a esta categoria.
        </Alert>
      )}
    </Container>
  );
};

export default CategoryFavoritesPage;
