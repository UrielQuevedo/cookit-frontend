import React from 'react';
import { ChefHutSpinner } from './Spinner';

const LayoutLoading = ({ loading, children }) => {
  return loading ? <ChefHutSpinner /> : children;
}

export default LayoutLoading;