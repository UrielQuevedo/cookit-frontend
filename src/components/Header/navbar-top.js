/* eslint-disable react/no-multi-comp */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
import { Grid, Hidden } from '@material-ui/core';
import './NavbarTop.css';
import SearchBar from './search-bar';

const NavbarTop = () => (
  <Hidden smDown>
    <AppBar position="sticky" className="navbar-color">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className="layout-display"
        >
          <Grid container item xs={7}>
            <Link to="/">
              <img src="/banner.png" alt="banner de la pagina" width="200" />
            </Link>
            <SearchBar />
          </Grid>
          <Grid container item xs={5} justify="flex-end">
            <Typography>
              <NavLink
                activeClassName="navbar-item-selected"
                exact
                to="/"
                className="navbar-item"
              >
                inicio
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                activeClassName="navbar-item-selected"
                exact
                to="/recipes/new"
                className="navbar-item"
              >
                crear
              </NavLink>
            </Typography>
            <Typography>
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
  </Hidden>
);

export default NavbarTop;
