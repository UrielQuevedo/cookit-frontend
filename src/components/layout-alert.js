import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const LayoutAlert = ({ isAlert, type, message }) =>
  isAlert && <Alert severity={type}>{message}</Alert>;

LayoutAlert.propTypes = {
  isAlert: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default LayoutAlert;
