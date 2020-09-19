import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/Recipes/New/New';
import NavbarTop from './Header/NavbarTop';
import Search from '../views/Search/Search';
import Recipe from '../views/Recipes/Recipe';

const App = () => {
  return (
    <Router>
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes/new" component={New} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/recipes/:id" component={Recipe} />
      </Switch>
    </Router>
  );
};

export default App;
