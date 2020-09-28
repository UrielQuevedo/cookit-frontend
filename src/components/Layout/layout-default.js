import NavbarBottomMobile from 'components/Header/navbar-bottom-mobile';
import NavbarTop from 'components/Header/navbar-top';
import NavbarTopMobile from 'components/Header/navbar-top-mobile';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const DefaultLayout = () => (
  <>
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
  </>
);

export default DefaultLayout;
