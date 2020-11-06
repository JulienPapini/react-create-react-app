import React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import history from '../../services/history';

const Router = ({ children }) => <ReactRouter history={history}>{children}</ReactRouter>;

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
