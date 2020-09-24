import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

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

AbstractInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default AbstractInput;
