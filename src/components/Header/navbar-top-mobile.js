import { AppBar, Grid, Hidden, Toolbar } from '@material-ui/core';
import Searcher from 'components/Searcher/searcher';
import Svg from 'components/svg';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarTopMobile = () => (
  <Hidden mdUp>
    <AppBar position="sticky" className="navbar-color">
      <Toolbar>
        <Grid container alignItems="center" className="layout-display">
          <Grid item xs={2}>
            <Link to="/">
              <Svg
                xlink="/svg/Icons.svg#logo"
                style={{ width: '40px', height: '60px' }}
              />
            </Link>
          </Grid>
          <Grid item xs={10} style={{ transform: 'translateY(-3px)' }}>
            <Searcher />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Hidden>
);

export default NavbarTopMobile;
