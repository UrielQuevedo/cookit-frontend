/* eslint-disable react/no-multi-comp */
import React from 'react';
import Svg from './svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    animation: '$giro 1.5s infinite'
  },

  '@keyframes giro': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
}));

const Spinner = ({ xlink }) => {
  const classes = useStyles();
  return <Svg xlink={xlink} className={classes.root} width="47" height="45" />;
};

export const ChefHutSpinner = () => <Spinner xlink="/svg/Icons.svg#chefHut" />;
