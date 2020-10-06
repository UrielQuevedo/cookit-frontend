import NavbarBottomMobile from 'components/Header/navbar-bottom-mobile';
import NavbarTop from 'components/Header/navbar-top';
import NavbarTopMobile from 'components/Header/navbar-top-mobile';
import UserProvider from 'context/user-context';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const DefaultLayout = () => (
  <UserProvider>
    <NavbarTop />
    <NavbarTopMobile />
    <Switch>
      {routes.map((route, i) =>
        route.component ? (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ) : (
          undefined
        )
      )}
      })}
    </Switch>
    <NavbarBottomMobile />
  </UserProvider>
);

export default DefaultLayout;
