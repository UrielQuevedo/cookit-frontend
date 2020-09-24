import React from 'react';
import { ChefHutSpinner } from './spinner';

const LayoutLoading = ({ loading, children }) =>
  loading ? <ChefHutSpinner /> : children;

export default LayoutLoading;
