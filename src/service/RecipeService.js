import API from './HttpService';

const URL_BASE = 'recipes';

export const getAllRecipes = () => {
  return API.get(URL_BASE);
};
