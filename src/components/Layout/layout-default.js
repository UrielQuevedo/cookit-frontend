import NavbarTop from 'components/Header/navbar-top';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const DefaultLayout = () => (
  <>
    <NavbarTop />
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
  </>
);

export default DefaultLayout;
