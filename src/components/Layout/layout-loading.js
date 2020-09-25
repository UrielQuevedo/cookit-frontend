import React from 'react';
import { ChefHutSpinner } from '../spinner';
import PropTypes from 'prop-types';

const LayoutLoading = ({ loading, children }) =>
  loading ? <ChefHutSpinner /> : children;

LayoutLoading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LayoutLoading;
