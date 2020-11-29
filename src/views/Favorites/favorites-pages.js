import { Container, Grid, Button } from '@material-ui/core';
import CardRecipe from 'components/CardRecipe/card-recipe';
import SelectCategoryModal from 'components/SelectCategoryModal/select-category-modal';
import { UserContext } from 'context/user-context';
import React, { useContext, useEffect, useState } from 'react';
import { addRecipeToCategory } from 'service/user-service';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

const FavoritesPage = () => {
  const [_recipes, setRecipes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [idRecipe, setIdRecipe] = useState();
  const { user } = useContext(UserContext);
  const { push } = useHistory();

  useEffect(() => {
    setRecipes(user.favorites);
  }, []);

  const handleSuccess = idCategory => {
    addRecipeToCategory(user.id, idCategory, idRecipe);
  };

  const openModal = idRecipe_ => {
    setIdRecipe(idRecipe_);
    setModalOpen(true);
  };

  const goToProfile = _ => {
    push('/profile');
  };

  return (
    <Container style={{ marginTop: '40px' }}>
      <Button 
        onClick={goToProfile}
        startIcon={<ArrowBackIosIcon />}>
        Volver
      </Button>
      <Grid container justify="center" spacing={3} style={{ marginTop: '10px' }}>
        {(_recipes || []).map((recipe, i) => (
          <Grid key={i} item xs={12} sm={3} style={{ marginBottom: '20px' }}>
            <CardRecipe
              recipe={recipe}
              setRecipes={setRecipes}
              addCategory
              openAdd={openModal}
            />
          </Grid>
        ))}
      </Grid>
      <SelectCategoryModal
        open={modalOpen}
        closeOpen={() => setModalOpen(false)}
        onSuccess={handleSuccess}
        idRecipe={idRecipe}
      />
    </Container>
  );
};

export default FavoritesPage;
