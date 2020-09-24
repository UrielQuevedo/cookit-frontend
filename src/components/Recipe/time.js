import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';

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

export default Time;
