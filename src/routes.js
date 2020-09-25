import Home from 'views/home';
import New from 'views/Recipes/New/new';
import Recipe from 'views/Recipes/recipe';
import Search from 'views/Recipes/Search/search';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/recipes/new', exact: true, component: New },
  { path: '/recipes/:id', exact: true, component: Recipe },
  { path: '/recipes', exact: true, component: Search }
];

export default routes;
