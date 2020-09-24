import React from 'react';
import Alert from '@material-ui/lab/Alert';

const LayoutAlert = ({ isAlert, type, message }) =>
  isAlert && <Alert severity={type}>{message}</Alert>

export default LayoutAlert;