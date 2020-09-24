import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ xlink, ...rest }) => (
  <svg {...rest}>
    <use xlinkHref={xlink} />
  </svg>
);
Svg.prototype = {
  xlink: PropTypes.string.isRequired
};

export default Svg;
