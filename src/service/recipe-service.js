import API from './http-service';

const URL_BASE = 'recipes';

export const getAllRecipes = parameters => API.get(URL_BASE, parameters);

export const postNewRecipe = recipe => API.post(`${URL_BASE}/new`, recipe);

export const postNewComment = comment =>
  API.post(`${URL_BASE}/comments`, comment);

export const getRecipe = id => API.get(`${URL_BASE}/${id}`);

export const getComments = (idRecipe, parameters) =>
  API.get(`${URL_BASE}/${idRecipe}/comments`, parameters);

export const deleteRecipeById = id => API.remove(`${URL_BASE}/${id}`);

export const getAllFollowersRecipes = id =>
  API.get(`${URL_BASE}/followers/${id}?sort=name&name.dir=desc`);
