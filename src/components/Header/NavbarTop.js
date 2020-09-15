import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './NavbarTop.css';

const NavbarTop = () => {
  return (
    <AppBar position="sticky" className="navbar-color">
      <Toolbar>
        <Grid
          contianer
          justify="space-between"
          alignItems="center"
          className="layout-display"
        >
          <Grid container item xs={6}>
            <Link to='/'>
              <img src="/banner.png" alt="banner de la pagina" width="200" />
            </Link>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Typography variant="h7">
              <NavLink
                activeClassName="navbar-item-selected"
                exact
                to="/"
                className="navbar-item"
              >
                inicio
              </NavLink>
            </Typography>
            <Typography variant="h7">
              <NavLink
                activeClassName="navbar-item-selected"
                exact
                to="/recipes/new"
                className="navbar-item"
              >
                crear
              </NavLink>
            </Typography>
            <Typography variant="h7">
              <NavLink
                activeClassName="navbar-item-selected"
                to="/profile"
                className="navbar-item"
              >
                perfil
              </NavLink>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarTop;
