import React, { useState } from 'react';
import {
  Container,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Button,
} from '@material-ui/core';
import './New.css';
import AddIcon from '@material-ui/icons/Add';
import AbstractInput from '../../components/AbstractInput';
import IngredientInput from '../../components/Recipe/IngriedientInput';
import { postNewRecipe } from '../../service/RecipeService';
import { useHistory } from 'react-router-dom';

const New = () => {
  const [recipe, setRecipe] = useState({});
  const { push } = useHistory();
  const [ingredients, setIngredients] = useState([
    {
      cantidad: '',
      nombre: '',
    },
  ]);

  const changeField = (event) => {
    const { value, name } = event.target;
    setRecipe((recipe) => ({ ...recipe, [name]: value }));
  };

  const handleIngredientField = (i) => (event) => {
    const { value, name } = event.target;
    const ingredient = ingredients[i];
    ingredient[name] = value;
    setIngredients(ingredients => ingredients.map((ing, idx) => {
      if (idx === i) return ingredient;
      return ing;
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postNewRecipe({ ...recipe, ingredients: ingredients })
      .then(() => push('/'));
    setIngredients([{}]);
    setRecipe({});
    event.target.reset();
  }

  const handleNewIngredient = () => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { cantidad: '', nombre: '' },
    ]);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid
            className="sectionRecipe"
            container
            item
            xs={8}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <img src={recipe?.image_url || 'https://assets-global.cpcdn.com/assets/camera-e526534167ed86f4891b97ae3da7bb6327b7679a0ad7c9b837434847f8457434.png'} alt="The best recipe."/>
            <Grid container>
              <Grid container item xs={2} alignItems="center" justify="center">
                Url de la foto
              </Grid>
              <Grid item xs={10}>
                <AbstractInput onChange={changeField}
                  type="text"
                  placeholder="ej: www.Pizzajpg.com"
                  name="image_url"
                  className="m5"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="sectionRecipe"
            container
            item
            xs={8}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <AbstractInput onChange={changeField}
              type="text"
              placeholder="ej: Masa de Pizza"
              name="name"
              className="m5"
            />
            <AbstractInput onChange={changeField}
              type="text"
              placeholder="ej: Pizza exquisita como si fueran hechas en italia"
              className="m5"
              name="description"
              multiline={true}
              rows={4}
              rowsMax={6}
            />
            <Grid container className="m5" spacing={2}>
              <Grid container item xs={5} alignItems="center">
                Comensales
              </Grid>
              <Grid item xs={7}>
                <AbstractInput onChange={changeField}
                  type="number"
                  name="comensales"
                  placeholder="Numero de personas"
                />
              </Grid>
            </Grid>
            <Grid container className="m5" spacing={2}>
              <Grid container item xs={5} alignItems="center">
                Tiempo
              </Grid>
              <Grid item xs={4}>
                <AbstractInput onChange={changeField}
                  type="number"
                  name="time"
                  placeholder="Tiempo"
                />
              </Grid>
              <Grid container item xs={3}>
                <Select
                  size="small"
                  id="timeType"
                  variant="standard"
                  fullWidth
                  value={10}
                  onChange={() => undefined}
                >
                  <MenuItem value={10}>Minuto/s</MenuItem>
                  <MenuItem value={20}>Hora/s</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="sectionRecipe"
            container
            item
            xs={8}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <h2>Ingredientes</h2>
            <IngredientInput changeField={handleIngredientField} ingredients={ingredients} />
          </Grid>
          <IconButton onClick={handleNewIngredient}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid container justify="center"><Button type="submit" color="primary" variant="contained" style={{ margin:'10px 0 30px 0' }}>Publicar</Button></Grid>
      </form>
    </Container>
  );
};

export default New;
