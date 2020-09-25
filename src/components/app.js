import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/home';
import New from 'views/Recipes/New/new';
import NavbarTop from './Header/navbar-top';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Search from '../views/Recipes/Search/search';
=======
import Search from '../views/Search/search';
>>>>>>> feat: se agregan los proptypes
=======
import Search from '../views/Recipes/Search/search';
>>>>>>> feat(fix): Sacando los warnings
import Login from '../views/Login/login';
import Recipe from '../views/Recipes/recipe';
import AuthProvider from '../context/auth-context';
=======
import Search from 'views/Recipes/Search/search';
import Login from 'views/Login/login';
import Recipe from 'views/Recipes/recipe';
import AuthProvider from 'context/auth-context';
>>>>>>> feat: cambio el path de los imports

const App = () => (
  <Router>
    <Switch>
      <AuthProvider>
        <Route exact path="/login" component={Login} />
        <NavbarTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes/new" component={New} />
          <Route exact path="/recipes" component={Search} />
          <Route exact path="/recipes/:id" component={Recipe} />
        </Switch>
      </AuthProvider>
    </Switch>
  </Router>
);

export default App;
