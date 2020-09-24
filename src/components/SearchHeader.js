import { Grid } from '@material-ui/core';
import React from 'react';
import Searcher from './Searcher/Searcher';

const TITLE = '¿Que vas a cocinar hoy?';

const SearchHeader = () => {
  return (
    <Grid container justify="center" direction="column">
      <Grid item xs={12}>
        <p
          style={{
            fontSize: '45px',
            margin: '4rem 0 2rem 0',
            textAlign: 'center',
            fontFamily: 'Segoe UI semibold',
            color: '#4a4a4a',
          }}
        >
          {TITLE}
        </p>
      </Grid>
      <Grid container justify="center" xs={12}>
        <Grid item xs={12} sm={8} style={{ margin: '20px 0 20px 0' }}>
          <Searcher />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchHeader;