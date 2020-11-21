import React, { useContext, useEffect, useState } from 'react';
import NewForm from 'components/NewForm/new-form';
import { UserContext } from 'context/user-context';
import { useParams } from 'react-router-dom';
import { editRecipe, getRecipe } from 'service/recipe-service';

const EDIT_BUTTON_NAME = 'Editar';

const EditRecipe = () => {
  const { idRecipe } = useParams();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    getRecipe(idRecipe)
      .finally(() => setLoading(false))
      .then(recipe_ => {
        console.log(recipe_);
        setRecipe(recipe_);
      });
  }, []);

  const sendData = value => {
    editRecipe(user.id, value);
  };

  return (
    <>
      {loading && <div>Cargando...</div>}
      {!loading && (
        <NewForm
          recipe={recipe}
          sendData={sendData}
          buttonName={EDIT_BUTTON_NAME}
        />
      )}
    </>
  );
};

export default EditRecipe;
