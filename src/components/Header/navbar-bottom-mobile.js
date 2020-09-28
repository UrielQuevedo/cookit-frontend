import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden
} from '@material-ui/core';
import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const MENUS = [
  {
    id: 0,
    name: 'Inicio',
    redirectTo: '/',
    icon: <HomeIcon />
  },
  {
    id: 1,
    name: 'Crear',
    redirectTo: '/recipes/new',
    icon: <AddBoxIcon />
  },
  {
    id: 2,
    name: 'Perfil',
    redirectTo: '/profile',
    icon: <PersonIcon />
  }
];

const NavbarBottomMobile = () => {
  const { push } = useHistory();
  const pathname = window.location.pathname;

  const goTo = pathToRedirect => () => {
    push(pathToRedirect);
  };

  const getItemSelected = () => MENUS.find(m => m.redirectTo === pathname)?.id;

  return (
    <Hidden mdUp>
      <BottomNavigation
        value={getItemSelected()}
        showLabels
        style={{ width: '100%', position: 'fixed', bottom: '0px' }}
      >
        {MENUS.map(({ id, name, redirectTo, icon }) => (
          <BottomNavigationAction
            key={id}
            label={name}
            icon={icon}
            onClick={goTo(redirectTo)}
          />
        ))}
      </BottomNavigation>
    </Hidden>
  );
};

export default NavbarBottomMobile;
