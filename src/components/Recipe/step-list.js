import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import SectionTitle from './section-title';
import PropTypes from 'prop-types';

const TITLE = 'Pasos';

const StepList = ({ steps }) => (
  <Grid item container xs={12} className="plr-20">
    <SectionTitle title={TITLE} />
    <Grid item xs={12} container direction="column" className="mtb-10">
      {steps.map(({ description }, i) => (
        <Grid key={i} container item xs={12} className="mtb-10">
          <Grid container item xs={1} justify="center" alignContent="center">
            <span className="number-step">{i + 1}</span>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography variant="body1" className="description-step">
              {description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

StepList.defaultProps = {
  steps: []
};

StepList.propTypes = {
  steps: PropTypes.array
};

export default StepList;
