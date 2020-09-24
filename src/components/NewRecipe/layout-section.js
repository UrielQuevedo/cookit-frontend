import { Grid } from '@material-ui/core';
import React from 'react';

const LayoutSection = ({ children, classStyle = 'sectionRecipe' }) => (
  <Grid
    container
    item
    className={classStyle}
    md={8}
    xs={12}
    justify="center"
    alignItems="center"
    direction="column"
  >
    {children}
  </Grid>
);

export default LayoutSection;
