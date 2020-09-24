import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const LayoutSection = ({ children, classStyle }) => (
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

LayoutSection.defaultProps = {
  classStyle: 'sectionRecipe'
};

LayoutSection.propTypes = {
  children: PropTypes.node.isRequired,
  classStyle: PropTypes.string
};

export default LayoutSection;
