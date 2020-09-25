import API from './http-service';

const URL_BASE = 'recipes';

export const getAllRecipes = parameters => API.get(URL_BASE, parameters);

export const postNewRecipe = recipe => API.post(`${URL_BASE}/new`, recipe);

export const getRecipe = id => API.get(`${URL_BASE}/${id}`);
