import { Card, CardContent, Grid, Grow, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CardAdd from 'components/CardAdd/card-add';
import CategoryModal from 'components/CategoryModal/category-modal';
import { UserContext } from 'context/user-context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCategories } from 'service/user-service';

const Favorites = ({ favorites }) => {
  const [openModalCategory, setOpenModalCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const { push } = useHistory();
  const { user } = useContext(UserContext);

  const getCategoriesData = () => {
    getCategories(user.id).then(categories_ => setCategories(categories_));
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  const CardCategory = ({ name, url }) => {
    return (
      <Grow in>
        <Card className="cardAdd">
          <Grid container justify="center">
            <CardContent>
              <img src={url} height="200px" alt="" />
            </CardContent>
            <Typography
              variant="h5"
              style={{ marginBottom: '25px', textTransform: 'capitalize' }}
            >
              {name}
            </Typography>
          </Grid>
        </Card>
      </Grow>
    );
  };

  return (
    <>
      {(favorites.length === 0 && (
        <Alert color="warning">No agregaste ninguna receta a favorito.</Alert>
      )) || (
        <>
          <Grid
            item
            xs={12}
            sm={3}
            style={{ marginBottom: '20px' }}
            onClick={() => push('/favorites')}
          >
            <CardCategory name="Favoritos" url={favorites[0].imageUrl} />
          </Grid>
          {categories.map(({ name, favorites: favorites_, id }) => (
            <Grid
              item
              xs={12}
              sm={3}
              key={id}
              style={{ marginBottom: '20px' }}
              onClick={() => push(`/favorites/category/${id}`)}
            >
              <CardCategory
                name={name}
                url={
                  favorites_[0]
                    ? favorites_[0].imageUrl
                    : 'https://i.pinimg.com/originals/3a/ab/e0/3aabe0e9a520b9ad90407a82f85adb42.jpg'
                }
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={3} style={{ marginBottom: '20px' }}>
            <CardAdd action={() => setOpenModalCategory(true)} />
          </Grid>
          <CategoryModal
            onSuccess={() => getCategoriesData()}
            openModal={openModalCategory}
            closeModal={() => setOpenModalCategory(false)}
          />
        </>
      )}
    </>
  );
};

export default Favorites;
