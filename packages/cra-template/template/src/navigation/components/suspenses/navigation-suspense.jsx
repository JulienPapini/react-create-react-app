import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const NavigationSuspense = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

NavigationSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationSuspense;
