import API from './HttpService';

const URL_BASE = 'recipes';

export const getAllRecipes = () => {
  return API.get(URL_BASE);
};

export const postNewRecipe = (recipe) => {
  return API.post(URL_BASE + '/new', recipe);
}
