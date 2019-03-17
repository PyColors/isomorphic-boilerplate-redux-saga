import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';

// utils
import history from './utils/history';
import store from './utils/store';
import fetchDataForLocation from './utils/fetchDataForLocation';

const render = AppClient => {
  ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppClient />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    /* eslint-disable global-require */
    const NextApp = require('./App').default;
    /* eslint-enable global-require */
    render(NextApp);
  });
}

// Rendering App;
store.subscribe(() => {
  const state = store.getState();
  if (state.question.length > 0 || state.questions.length > 0) {
    console.log('coco Server Rendering');
    render(App);
  }
});
