import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/Recipes/New';
import NavbarTop from './Header/NavbarTop';

const App = () => {
  return (
    <Router>
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes/new" component={New} />
      </Switch>
    </Router>
  );
};

export default App;
