import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <Grid item xs={12}>
    <Typography variant="h4" className="title-section-recipe">
      {title}
    </Typography>
  </Grid>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
