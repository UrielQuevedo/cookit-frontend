import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'views/Login/login';
import AuthProvider from 'context/auth-context';
import DefaultLayout from './Layout/layout-default';

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
