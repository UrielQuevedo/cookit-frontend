import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ xlink, ...rest }) => (
  <svg {...rest}>
    <use xlinkHref={xlink} />
  </svg>
);
Svg.propTypes = {
  xlink: PropTypes.string.isRequired
};

export default Svg;
