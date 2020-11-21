import API from './http-service';

const URL_BASE = 'users';

export const postAddFavorite = (userId, recipeId) =>
  API.post(`${URL_BASE}/${userId}/favorites/${recipeId}`);

export const deleteRecipeToFavorite = (userId, recipeId) =>
  API.remove(`${URL_BASE}/${userId}/favorites/${recipeId}`);

export const postFollowUser = (userId, userFollowId) =>
  API.post(`${URL_BASE}/${userId}/follow/${userFollowId}`);

export const deleteFollowUser = (userId, userUnfollowId) =>
  API.remove(`${URL_BASE}/follow`, { userId, userUnfollowId });

export const createCategory = (userId, name) =>
  API.get(`categories/user/${userId}/${name}`);

export const getCategories = userId => API.get(`categories/user/${userId}`);

export const addRecipeToCategory = (userId, idCategory, idRecipe) =>
  API.get(`categories/user/${userId}/add/${idCategory}/${idRecipe}`);

export const getFavoritesByCategory = (userId, idCategory) =>
  API.get(`categories/user/${userId}/favorites/${idCategory}`);
