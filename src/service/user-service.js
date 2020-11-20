import API from './http-service';

const URL_BASE = 'users';

export const postAddFavorite = (userId, recipeId) =>
  API.post(`${URL_BASE}/${userId}/favorites/${recipeId}`);

export const editUser = user =>
  API.put(`${URL_BASE}`, user);

export const deleteRecipeToFavorite = (userId, recipeId) =>
  API.remove(`${URL_BASE}/${userId}/favorites/${recipeId}`);

export const postFollowUser = (userId, userFollowId) =>
  API.post(`${URL_BASE}/${userId}/follow/${userFollowId}`);

export const deleteFollowUser = (userId, userUnfollowId) =>
  API.remove(`${URL_BASE}/follow`, { userId, userUnfollowId });
