import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import getStore from './getStore';
import App from './App';

const history = createHistory();

const store = getStore(history);

const fetchDataForLocation = location => {
  if (location.pathname === '/') {
    store.dispatch({ type: 'REQUEST_FETCH_QUESTIONS' });
  }

  if (location.pathname.includes('questions')) {
    store.dispatch({
      type: 'REQUEST_FETCH_QUESTION',
      question_id: location.pathname.split('/')[2]
    });
  }
};

const render = AppClient => {
  ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppClient />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('AppContainer')
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

// render(App);

store.subscribe(() => {
  const state = store.getState();
  if (state.questions.length > 0) {
    console.log('coco Server Rendering');
    render(App);
  } else {
    console.log('coco not Server Rendering');
  }
});

fetchDataForLocation(history.location);
history.listen(fetchDataForLocation);
