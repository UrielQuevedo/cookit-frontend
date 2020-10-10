import API from './http-service';

const URL_BASE = 'users';

export const postAddFavorite = (userId, recipeId) =>
  API.post(`${URL_BASE}/${userId}/favorites/${recipeId}`);
