import API from './HttpService';

const URL_BASE = 'recipes';

export const getAllRecipes = (params) => {
  return API.get(URL_BASE, params);
};

export const postNewRecipe = (recipe) => {
  return API.post(URL_BASE + '/new', recipe);
}

export const getRecipe = (id) => {
  return API.get(URL_BASE + `/${id}`);
}
