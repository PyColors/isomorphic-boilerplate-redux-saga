import React from 'react';
import { connect } from 'react-redux';

import DefaultTemplate from './templates/DefaultTemplate/DefaultTemplate';
import Header from './components/molecules/Header/Header';
import Routes from './Routes';

const AppDisplay = () => (
  /**
   * Default Template has principal components:
   * Header
   * Routes
   */
  <DefaultTemplate header={<Header />} routes={<Routes />} />
);

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(AppDisplay);
