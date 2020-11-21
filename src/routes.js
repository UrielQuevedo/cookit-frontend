import Home from 'views/home';
import New from 'views/Recipes/New/new';
import Recipe from 'views/Recipes/recipe';
import Search from 'views/Recipes/Search/search';
import User from 'views/user';
import CommentList from 'views/Recipes/CommentList/comment-list';
import FavoritesPage from 'views/Favorites/favorites-pages';
import CategoryFavoritesPage from 'views/CategoryFavorites/category-favorites-page';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/recipes/new', exact: true, component: New },
  { path: '/recipes/:id', exact: true, component: Recipe },
  { path: '/recipes/:id/comments', exact: true, component: CommentList },
  { path: '/recipes', exact: true, component: Search },
  { path: '/profile', exact: true, component: User },
  { path: '/favorites', exact: true, component: FavoritesPage },
  {
    path: '/favorites/category/:idCategory',
    exact: true,
    component: CategoryFavoritesPage
  }
];

export default routes;
