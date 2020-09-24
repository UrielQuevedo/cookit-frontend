import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import PropTypes from 'prop-types';

const Time = ({ time }) => (
  <Grid item xs={12} className="mtb-20">
    <Divider className="height" />
    <Typography variant="h6" className="time-name">
      <AccessAlarmsIcon className="icon-transformY-4 mr-2" />
      {time} minutos
    </Typography>
    <Divider className="height" />
  </Grid>
);

Time.propTypes = {
  time: PropTypes.string.isRequired
};

export default Time;
