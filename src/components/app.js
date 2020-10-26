import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'views/Login/login';
import AuthProvider from 'context/auth-context';
import DefaultLayout from './Layout/layout-default';
import Register from 'views/Register/register';

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
