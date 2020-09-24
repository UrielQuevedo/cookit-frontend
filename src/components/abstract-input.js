import React from 'react';
import { TextField } from '@material-ui/core';

const AbstractInput = ({ type, name, placeholder, ...rest }) => (
  <TextField
    type={type}
    id={name}
    name={name}
    variant="outlined"
    placeholder={placeholder}
    size="small"
    required
    fullWidth
    {...rest}
  />
);
export default AbstractInput;
