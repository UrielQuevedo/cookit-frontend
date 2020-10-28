import { Button } from '@material-ui/core';
import React from 'react';

const ButtonFollow = ({ title, onClick, color }) => (
  <Button
    variant="contained"
    color={color}
    size="medium"
    fullWidth
    onClick={onClick}
  >
    {title}
  </Button>
);

export default ButtonFollow;
