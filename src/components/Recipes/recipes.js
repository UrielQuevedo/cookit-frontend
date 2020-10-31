import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CardRecipe from 'components/CardRecipe/card-recipe';
import InfiniteScroll from 'components/infinite-scroll';
import LayoutLoading from 'components/Layout/layout-loading';

const Recipes = ({ fetchData }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalPages: 1,
    totalElements: '?'
  });

  const getPaginationRecipes = async () => {
    const { page, size } = pagination;
    const { content, totalElements, totalPages } = await fetchData({
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
    setRecipes([]);
    setLoading(true);
    getPaginationRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutLoading loading={loading}>
      <Grid container justify="center" spacing={3}>
        {recipes.map((recipe, i) => (
          <Grid key={i} item xs={12} sm={3} style={{ marginBottom: '20px' }}>
            <CardRecipe recipe={recipe} setRecipes={setRecipes} />
            {i + 1 === recipes.length && (
              <InfiniteScroll
                handleScroll={getPaginationRecipes}
                hasMore={pagination.page < pagination.totalPages}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </LayoutLoading>
  );
};

export default Recipes;
