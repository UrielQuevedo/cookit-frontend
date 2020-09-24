import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const SectionTitle = ({ title }) => (
  <Grid item xs={12}>
    <Typography variant="h4" className="title-section-recipe">
      {title}
    </Typography>
  </Grid>
);

export default SectionTitle;
