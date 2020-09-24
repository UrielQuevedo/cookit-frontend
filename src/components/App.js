import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/Recipes/New/New';
import NavbarTop from './Header/NavbarTop';
import Search from '../views/Search/Search';
import Login from '../views/Login/Login';
import Recipe from '../views/Recipes/Recipe';
import AuthProvider from '../context/AuthContext';

const App = () => {
  return (
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
};

export default App;
